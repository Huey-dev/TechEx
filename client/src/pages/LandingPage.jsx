import React from "react";
import Navigation from "../components/common/Navigation";

const LandingPage = () => {
  return (
    <main className="bg">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('Background_gadgets.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <Navigation />
    </main>
  );
};

export default LandingPage;
