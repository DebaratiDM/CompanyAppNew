import React from "react";
import { Banner } from "../Component/Common/Banner";
import { HomeAboutSection } from "../Component/Core/Home/HomeAboutSection";
import { Services } from "../Component/Core/Home/Services";
import { Portfolio } from "../Component/Core/Home/Portfolio";
import { Clients } from "../Component/Core/Home/Clients";
export const Home = () => {
  return (
    <main id="main">
      <Banner />
      <HomeAboutSection />
      <Services />
      <Portfolio />
      <Clients />
    </main>
  );
};
