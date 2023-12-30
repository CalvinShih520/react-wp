import React from "react";
import Banner from "./Banner";
import Breadcrumbs from "./Breadcrumbs";
import History from "./History";
import TimeLine from "./Timeline";
import Page from "./Pagination";

const About = () => {

    return (
        <div className="All-Section">
            <Banner />
            <Breadcrumbs />
            <History />
            <TimeLine />
            <Page />
        </div>
      );
}

export default About;