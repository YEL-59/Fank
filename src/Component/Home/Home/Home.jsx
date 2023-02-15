import React from "react";
import Banner from "../Banner/Banner";

import InfoCards from "../InfoCards/InfoCards";
import Services from "../Service/Services";
import BannerTwo from "../Bannertwo/BannerTwo";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Testimonials from "../Testimonial/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="mx-5">
        <Banner></Banner>
        <InfoCards></InfoCards>
        <Services></Services>
        <BannerTwo></BannerTwo>
        <MakeAppoinment></MakeAppoinment>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
