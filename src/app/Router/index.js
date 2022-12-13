import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'layout';
import Home from 'pages/Home';
import Second from 'pages/Second';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="second" element={<Second />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
