import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Player from '../containers/Player';

const App = () => (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Routes>  
      </Layout>
  </BrowserRouter>
);

export default App;