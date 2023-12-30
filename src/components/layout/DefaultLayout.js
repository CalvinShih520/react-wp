import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({childrenn}) => {
    return (
        <div>
            <Header />
            {childrenn}
            <Footer />
        </div>
    );
}

export default DefaultLayout