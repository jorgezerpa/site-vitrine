import React from 'react';
import { AppBar, Hero, HomeSectionOne, HomeSectionTwo, HomeSectionThree, HomeSectionFour, Footer } from '../../components';

const Accueil = () => {
  return (
    <div>
      <AppBar />
      <Hero />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour title='sectionOne' subtitle='subtitle' elements={[1,2,3]} />
      <Footer />
    </div>
  )
}

export default Accueil