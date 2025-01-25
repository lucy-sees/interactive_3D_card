import React, { FC } from "react";
import GlassCard from "@/components/GlassCard/GlassCard";
import Header from "@/components/Header/Header";

const Home: FC = () => {
  return (
    <div className="app-container">
      <>
        <Header />
        <GlassCard
          image="/services/web-design.jpg"
          title="Premium Web Design"
          description="Crafting immersive digital experiences with cutting-edge technologies and user-centered design principles."
        />
      </>
    </div>
  );
};

export default Home;
