// app/page.tsx
"use client";
import React, { FC } from "react";
import Header from "@/components/shared/Header/Header";
import CardWrapper from "@/components/RotatingGlassCards/CardWrapper";
import Footer from "@/components/shared/Footer/Footer";

const Home: FC = () => {
  return (
    <div className="app-container min-h-screen bg-space-900">
      <Header />
      <CardWrapper />
      <Footer />
    </div>
  );
};

export default Home;
