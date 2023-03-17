import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome To <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The Purpose of My Portfolio is to help the client see my workspaces. it also serve as a CV and a Business Card.

      </SectionText>
      <Button onclick={() => window.location = 'https://www.twitter.com/ikanaegims'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;