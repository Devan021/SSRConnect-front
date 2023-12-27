import Landing from './landing';
import About from './about';
import HowWeWork from './how-we-work';
import Testimonials from './testimonials';
import Projects from './projects';

const LandingPage = () => {
  return (
      <div className="items-center justify-center h-full flex flex-col">
          <Landing />
          <About />
          <HowWeWork />
          <Projects />
          <Testimonials />
      </div>
  );
};

export default LandingPage;