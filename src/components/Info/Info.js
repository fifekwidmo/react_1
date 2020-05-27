import React from 'react';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import Hero from '../Hero/Hero';
import styles from './Info.scss';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} imageUrl={settings.info.image}/>
    <p className={styles.component}>{settings.info.content}</p>
  </Container>
);

export default Info;