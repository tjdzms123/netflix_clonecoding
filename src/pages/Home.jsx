import React, { useEffect } from "react";
import CopyWrite1 from "../components/home/CopyWrite1";
import CopyWrite2 from "../components/home/CopyWrite2";
import CopyWrite3 from "../components/home/CopyWrite3";
import Footer from "../components/home/Footer";
import VideoPlayer from "../components/home/VideoPlayer";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { cookies } from "../shared/cookies";
// import VideoDesc from ".  ./components/home/VideoDesc";

function Home() {
  const navi = useNavigate();
  // ========== EH "Add Guard" ===========
  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      navi("/login");
    }
  });
  // ========== EH "Add Guard" ===========

  return (
    <>
      <Helmet>
        <title>Home - Netflix</title>
      </Helmet>
      {/* <VideoDesc /> */}
      <VideoPlayer />
      {/* testing */}
      <CopyWrite1 />
      <CopyWrite2 />
      <CopyWrite3 />
      <Footer />
    </>
  );
}
export default Home;
