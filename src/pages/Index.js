import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutVca from "../components/AboutVca/AboutVca";
import Arrivals from "../components/Arrivals/Arrivals";
import Article from "../components/Article/Article";
import Banner from "../components/Banner/Banner";
import Clips from "../components/Clips/Clips";
import Collection from "../components/Collection/Collection";
import sprite from "../assets/img/sprite_com.png";
import styled from "styled-components";

const BTT = styled(Link)`
  background: url(${sprite}) no-repeat;
  font-weight: 800;
  position: fixed;
  bottom: 4em;
  right: 4em;
  width: 74px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  background-position: -160px 0px;
  transition: opacity 0.5s ease-in;
  
  opacity: ${(props) => props.opacity}; 
`;

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isBTTShown, setIsBTTShown] = useState(false);
  const [bttColor, setBttColor] = useState("black");

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.pageYOffset);
      if (scrollY > 600) {
        setIsBTTShown(true);
      } else {
        setIsBTTShown(false);
      }

      if (scrollY < 7030) {
        setBttColor("black");
      } else {
        setBttColor("antiquewhite");
      }
    });
  });
  return (
    <>
      <Banner />
      <Collection />
      <Arrivals />
      <Clips />
      <AboutVca />
      <Article />
      <BTT
        to=""
        onClick={goTop}
        opacity={isBTTShown ? "1" : "0"}
        color={bttColor}
      >
        Top
      </BTT>
    </>
  );
};

export default Index;
