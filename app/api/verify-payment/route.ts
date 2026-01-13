import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { reference, email, name, phone } = body;

    if (!reference) {
      return NextResponse.json(
        { success: false, message: 'Payment reference is required' },
        { status: 400 }
      );
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      console.error('PAYSTACK_SECRET_KEY not configured');
      return NextResponse.json(
        { success: false, message: 'Payment configuration error' },
        { status: 500 }
      );
    }

    // Verify payment with Paystack
    const verifyResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${secretKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const verifyData = await verifyResponse.json();

    if (!verifyResponse.ok) {
      console.error('Paystack verification failed:', verifyData);
      return NextResponse.json(
        { success: false, message: 'Payment verification failed' },
        { status: 400 }
      );
    }

    // Check if payment was successful
    if (verifyData.data.status === 'success') {
      // Verify amount (₦1,000 = 100000 kobo)
      if (verifyData.data.amount !== 100000) {
        return NextResponse.json(
          { success: false, message: 'Invalid payment amount' },
          { status: 400 }
        );
      }

      // Log successful payment (in production, save to database)
      console.log('Payment verified successfully:', {
        reference,
        email,
        name,
        phone,
        amount: verifyData.data.amount / 100,
        paid_at: verifyData.data.paid_at,
      });

      // Here you could:
      // 1. Save payment record to database
      // 2. Send confirmation email
      // 3. Log to analytics
      // 4. Trigger webhooks

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        data: {
          reference: verifyData.data.reference,
          amount: verifyData.data.amount / 100,
          paid_at: verifyData.data.paid_at,
        },
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Payment not successful' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
