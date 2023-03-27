import React from "react";
import Community from "../../components/Community/Community";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Parts from "../../components/Parts/Parts";
import Start from "../../components/Start/Start";

const Home = () => {
  return (
    <div>
      <Hero />
      <Start />
      <Parts />
      <Community />
    </div>
  );
};

export default Home;
