import React from "react";
import AboutVca from "../components/AboutVca/AboutVca";
import Arrivals from "../components/Arrivals/Arrivals";
import Banner from '../components/Banner/Banner';
import Clips from "../components/Clips/Clips";
import Collection from "../components/Collection/Collection";


const Index = () => {
  return (
    <>
        <Banner />
        <Collection />
        <Arrivals />
        <Clips />
        <AboutVca />
    </>
  );
};

export default Index;
