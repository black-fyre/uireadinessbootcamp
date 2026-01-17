import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Tracks from '@/components/Tracks';
import Timeline from '@/components/Timeline';
import WhyAttend from '@/components/WhyAttend';
import Register from '@/components/Register';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Tracks />
        <Timeline />
        <WhyAttend />
        <Register />
      </main>
      <Footer />
    </div>
  );
}
