import React from 'react';
import { Card, BigGradientText } from '../../atoms';

const About = ({ children }) => {
  return (
    <section className="about-section">
      <BigGradientText>about</BigGradientText>
      <Card>
        <p>{children}</p>
      </Card>
    </section>
  );
};

export default About;
