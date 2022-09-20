import React from "react";
import { Banner } from "../Component/Common/Banner";
import { HomeAboutSection } from "../Component/Core/Home/HomeAboutSection";
import { Services } from "../Component/Core/Home/Services";
export const Home = () => {
  return (
    <main id="main">
      <Banner />
      <HomeAboutSection />
      <Services />
    </main>
  );
};
