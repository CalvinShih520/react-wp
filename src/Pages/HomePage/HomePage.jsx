import React from 'react';
import MySlider  from './Slider.jsx';
import Topic from './Topic.jsx';
import Introdution from './Introdution.jsx';
import News from './News.jsx';
import About from './About.jsx';
import Resource from './Resource.jsx';
import Brands from './Brands.jsx';




const HomePage = () => {


  return (
    <div className="All-Section">
      <MySlider  />
      <Topic />
      <Introdution />

      <News />
      <About />
      <Resource />
      <Brands />
    </div>
  );
}

export default HomePage;
