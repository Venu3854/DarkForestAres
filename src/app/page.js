import React from "react";
import Header from "./Components/Header";
import Body1 from "./Components/Body1";
import Body2 from "./Components/Body2";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className=" bg-custom ">
      <Header />
      <Body1 />
      <Body2 />
      <Footer />
    </div>
  );
}
