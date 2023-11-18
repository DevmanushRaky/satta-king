import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Faq from "../pages/faq/Faq"
import Contact from '../pages/contact/Contact';
import Chart from "../pages/chart/Chart"
import Result from "../pages/result/Result"
import ErrorPage from "../pages/errorpage/Error"
import PrivacyPolicy from "../pages/privacypolicy/PrivacyPolicy"
import About from '../pages/about/About';


const Routers = () => {
  return (

    <Routes>
      {/* Normal pages */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/result" element={<Result />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<ErrorPage />} />


    </Routes>

  );
};

export default Routers;
