"use client";
import React, { FC } from "react";
import GlassCard from "@/components/GlassCard/GlassCard";
import Header from "@/components/Header/Header";

const Home: FC = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="cards-grid">
        <GlassCard
          image="/images/avatar_1.png"
          title="Navneet K"
          position="Senior UX Designer"
          contact="navneet@company.com"
          socials={{
            linkedin: "#",
            github: "#",
            email: "#"
          }}
        />
        <GlassCard
          image="/images/avatar_2.png"
          title="Juma P"
          position="Lead Developer"
          contact="juma@company.com"
          socials={{
            linkedin: "#",
            github: "#",
            email: "#"
          }}
        />
      </div>
    </div>
  );
};

export default Home;
