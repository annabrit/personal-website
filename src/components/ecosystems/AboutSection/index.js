import React from 'react';
import { Card, SectionHeadingText } from '../../atoms';

const AboutSection = ({ children }) => {
  return (
    <section className="about-section">
      <SectionHeadingText>about</SectionHeadingText>
      <Card>
        <p>{children}</p>
      </Card>
    </section>
  );
};

export default AboutSection;
