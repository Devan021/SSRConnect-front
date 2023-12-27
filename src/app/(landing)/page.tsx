import Hero from '@/app/(landing)/components/hero';
import Contact from '@/app/(landing)/components/contact';
import Testimonials from '@/app/(landing)/components/testimonials';
import Features from '@/app/(landing)/components/features';
import Footer from '@/app/(landing)/components/footer';
import About from '@/app/(landing)/components/about';
import Projects from '@/app/(landing)/components/projects';
import Mission from '@/app/(landing)/components/mission';
import Themes from '@/app/(landing)/components/themes';
import Navbar from '@/app/(landing)/components/navbar';

export default function Home() {
  return (
      <>
          <Navbar />
          <main className="flex min-h-screen flex-col bg-gray-50">
              <Hero />
              <Mission />
              <About />
              <Themes />
              <Features />
              <Projects />
              <Testimonials />
              <Contact />
              <Footer />
          </main>
      </>
  );
}
