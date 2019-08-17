import React, { Component, Fragment } from "react";

import Header from "./Header";
import Banner from "./Banner";
import SubBanner from "./SubBanner";

import Image1 from "./img/images.jpeg";
import Image2 from "./img/download (2).jpeg";
import Image3 from "./img/images (1).jpeg";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Banner />
        <SubBanner
          imagePosition={1}
          image={Image1}
          heading={"SHORT TRIPS"}
          content={
            "More convenience for meetings, art exhibitions or gym time group gathering in nearby towns"
          }
          button={"Offer a ride"}
        />
        <SubBanner
          image={Image2}
          imagePosition={2}
          heading={"LONGER TRIPS"}
          content={
            "You deserve 2, 3 serveral days of rest, no worries with car, relax and enjoy!"
          }
          button={"Find a ride"}
        />
        <SubBanner
          imagePosition={1}
          image={Image3}
          heading={"MAKE YOUR WAY"}
          content={
            "choose when, where and how many times to stop, fill the stuff, empty it take friends, take Grandma to the doctor all in your time."
          }
          button={"SignUp for free"}
        />
      </Fragment>
    );
  }
}
