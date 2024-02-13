import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import headshot from './/assets/images/headshot.png';

const Section = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const HomePage = () => {
  return (
    <div>
      <section className="text-center py-20">
        <div className="container mx-auto px-4">
          <img
            src={ headshot }
            alt="Russell Anthony Bustamante"
            className="mx-auto rounded-full w-32 h-32 mb-4"
          />
          <h1 className="text-4xl font-bold">Hello, I'm Anthony Bustamante</h1>
          <p className="mt-4">I am a sophomore studying Computer Science at Carnegie Mellon.</p>
        </div>
      </section>

      <Section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">Work Experience</h2>
          {/* Map through your work experiences */}
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">Highlighted Projects</h2>
          {/* Map through your projects */}
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">Highlighted Posts</h2>
          {/* Map through your posts */}
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
