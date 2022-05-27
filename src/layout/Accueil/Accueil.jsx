import React from 'react';
import { Hero, HomeSectionOne, HomeSectionTwo, HomeSectionThree, HomeSectionFour } from '../../components';

const Accueil = () => {
  return (
    <div>
      <Hero />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour title='sectionOne' subtitle='subtitle' elements={[1,2,3]} />
    </div>
  )
}

export default Accueil