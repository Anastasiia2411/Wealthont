import React from "react";
import ReactDOM from "react-dom";
import HeaderInformation from "./components/Header/HeaderInformation";

import { Container } from "./components/Global/index.style";
import Achievement from "./components/Achievement/Achievement";
import AboutUs from "./components/AboutUs/AboutUs";
import OurDesigned from "./components/OurDesign/OurDesigned";
import HeaderMenu from "./components/Header/HeaderMenu";
import SavingAndInvesting from "./components/SavingAndInvesting/SavingAndInvesting";
import OurReviews from "./components/Review/Reviews";
import OurUsers from "./components/OurUsers/OurUsers";
import GlobalStyle from "./components/Global/normalize.style";
import Footer from "./components/Footer/Footer";
import { ScrollAnimationStyled } from "./components/Animation/ScrollAnimation.style";

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
            <ScrollAnimationStyled>
            <Container>
                <OurUsers/>
            </Container>
            </ScrollAnimationStyled>
            <Footer/>
        </>
    );
}







