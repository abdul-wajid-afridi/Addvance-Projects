import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import MainPage from "../../HomeMainPage/MainPage";
import Products from "../../Pages/Products";
import Contact from "../../Pages/Contact";
import About from "../../Pages/About";
import Login from "../../Pages/Login";
import AboutUs from "../../Pages/AboutUs";
const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact={true}>
            <MainPage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
