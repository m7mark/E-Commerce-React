import React from 'react';

import { Announcement } from '../components/Announcement';
import { Categories } from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Products } from '../components/Products';
import ScrollToTop from '../components/ScrollToTop';
import Slider from '../components/Slider';

export const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Announcement />
      <Navbar />
      <Slider />
      <Categories id='shopNow' />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};