import card from "../../../img/card-visa.png";
import telephone_2 from "../../../img/telephone_2.png";
import React, { useEffect, useState } from "react";
import { Button } from "../Global/Buttons.style";
import { OurDesignedBankCardImg, OurDesignedDiv } from "./OurDesigned.style";
import {
    AboutUsButtonWrapper,
    AboutUsTextWrapper,
    AboutUsTextWrapperHeader,
    AboutUsTextWrapperParagraph
} from "../AboutUs/AboutUs.style";
import { ScrollAnimationStyled } from "../Animation/ScrollAnimation.style";

export default function OurDesigned() {

    return (
        <ScrollAnimationStyled>
            <OurDesignedDiv>
                <OurDesignedBankCardImg visibilytyProp={"hidden-card"} src={card} alt="bank card"/>
                <OurDesignedBankCardImg visibilytyProp={"show_card"} src={card} alt="bank card"/>
                <img src={telephone_2} alt="telephone"/>
                <AboutUsTextWrapper sideProperty="left">
                    <AboutUsTextWrapperHeader>
                        Everyday cash, designed to build long-term wealth.
                    </AboutUsTextWrapperHeader>
                    <AboutUsTextWrapperParagraph>
                        Our Cash account, offered with Green Dot Bank, lets you automate your savings, so you can
                        pay
                        bills, withdraw from 19,000+ ATMs, and invest your extra cash in seconds to keep building
                        your
                        future.
                    </AboutUsTextWrapperParagraph>
                    <AboutUsButtonWrapper>
                        <Button propOfBtn="button-started">Start investing</Button>
                        <Button propOfBtn="button-log-in">Learn more</Button>
                    </AboutUsButtonWrapper>
                </AboutUsTextWrapper>
            </OurDesignedDiv>
        </ScrollAnimationStyled>);

}