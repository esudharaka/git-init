import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import { OrderLandingPage } from './features/order/Order';
import { Header } from './features/header/Header';
import { Footer } from './features/footer/Footer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<OrderLandingPage />}>
      <Route path='order' element={<OrderLandingPage />} />
      <Route path='redux' element={<Counter />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <Header />
      < RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
