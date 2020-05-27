import React from 'react';
import Container from '../Container/Container';
import FaqRules from '../FaqRules/FaqRules';
import {settings} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Faq = () => (
  <Container>
    <Hero titleText={settings.faq.title} imageUrl={settings.faq.image}/>
    <p>{settings.faq.content}</p>
    <FaqRules></FaqRules>
  </Container>
);

export default Faq;