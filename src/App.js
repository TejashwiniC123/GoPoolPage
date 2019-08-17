import React from "react";
import Image1 from "./component/img/images.jpeg";
import Image2 from "./component/img/download (2).jpeg"
import Image3 from "./component/img/images (1).jpeg"
import Header from "./component/Header";
import Banner from "./component/Banner";
import SubBanner from "./component/SubBanner";
import "./App.css";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
   

<Router>
    <div>
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
    </div>
</Router>
  );
}

export default App;
