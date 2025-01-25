// app/page.tsx
"use client";
import React, { FC } from "react";
import GlassCard from "@/components/GlassCard/GlassCard";
import Header from "@/components/Header/Header";

const Home: FC = () => {
  return (
    <div className="app-container min-h-screen bg-space-900">
      <Header />
      <div className="cards-grid py-8 px-4 md:px-8">
        <div className="card-wrapper">
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
        </div>
        <div className="card-wrapper">
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
    </div>
  );
};

export default Home;