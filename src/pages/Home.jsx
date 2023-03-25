import React from "react";
import CopyWrite1 from "../components/home/CopyWrite1";
import CopyWrite2 from "../components/home/CopyWrite2";
import CopyWrite3 from "../components/home/CopyWrite3";
import Footer from "../components/home/Footer";
import VideoPlayer from "../components/home/VideoPlayer";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      //========= EH =============
      <Helmet>
        <title>Home - Netflix</title>
      </Helmet>
      //========= EH =============
      <VideoPlayer />
      <CopyWrite1 />
      <CopyWrite2 />
      <CopyWrite3 />
      <Footer />
    </>
  );
}
export default Home;
