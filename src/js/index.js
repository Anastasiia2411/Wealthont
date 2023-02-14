import React from "react";
import ReactDOM from "react-dom";
import HeaderInformation from "./components/HeaderInformation";

import { Container } from "./components/index.style";
import Achievement from "./components/Achievement";
import AboutUs from "./components/AboutUs";
import OurDesigned from "./components/OurDesigned";
import HeaderMenu from "./components/HeaderMenu";
import SavingAndInvesting from "./components/SavingAndInvesting";
import OurReviews from "./components/Reviews";
import OurUsers from "./components/OurUsers";
import GlobalStyle from "./components/normalize.style";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <App/>
);

function App() {
    return (
        <>
            <GlobalStyle/>
            <Container>
                <HeaderMenu/>
                <HeaderInformation/>
                <Achievement/>
                <AboutUs/>
                <OurDesigned/>
            </Container>
            <SavingAndInvesting/>
            <OurReviews/>
            <Container>
                <OurUsers/>
            </Container>
            <Footer/>
        </>
    );
}







