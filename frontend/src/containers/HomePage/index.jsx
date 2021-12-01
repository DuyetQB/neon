import React from "react";
import * as S from "./styled";
import Banner from "containers/Banner";
import DishesList from "containers/DishesList";
import HowToOrder from "containers/HowToOrder";
import Popular from "containers/Popular";
import IntroCook from "containers/IntroCook";
import IntroApp from "containers/IntroApp";
import ClientsSaid from "containers/ClientsSaid";
import Cart from "containers/Cart";
const Home = () => {
  return (
    <>
      <Banner />
      <DishesList />
      <HowToOrder />
      <Popular />
      <IntroCook />
      <IntroApp />
      <ClientsSaid />
      <Cart />
    </>
  );
};
export default Home;
