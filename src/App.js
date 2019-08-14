import React from "react";
// import HomePage from "./component/HomePage"

import image3 from "./img/images.jpeg";
import Image4 from "./img/download (2).jpeg";
import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import SubBanner from "./component/subBanner";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <SubBanner
        Image3={image3}
        tripHeader={"SHORT TRIPS"}
        trip={
          "More convenience for meetings, art exhibitions or gym  time group gathering in nearby towns"
        }
        offer={"Offer a ride"}
      />
      <SubBanner Image4={Image4} />
    </React.Fragment>
  );
}

export default App;
