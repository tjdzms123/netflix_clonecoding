import React from "react";
import CopyWrite1 from "../components/home/CopyWrite1";
import CopyWrite2 from "../components/home/CopyWrite2";
import Footer from "../components/home/Footer";
import VideoPlayer from "../components/home/VideoPlayer";

function Home() {
  return (
    <>
      <VideoPlayer />
      <CopyWrite1 />
      <CopyWrite2 />
      <Footer />
    </>
  );
}
export default Home;
