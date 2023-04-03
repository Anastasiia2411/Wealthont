import React from "react";
import people from "../../../img/people.png";
import { Button } from "../Global/Buttons.style";
import {
    HeaderInformContainer,
    HeaderImg,
    HeaderElementContainer,
    HeaderText,
    HeaderParagraph
} from "./HeaderInformation.style";

import { ScrollAnimationStyled } from "../Animation/ScrollAnimation.style";

export default function HeaderInformation() {
    return (
        <ScrollAnimationStyled>
            <HeaderInformContainer>
                <HeaderImg src={people} alt="people"/>
                <HeaderElementContainer>
                    <HeaderText>Make wealth your own.</HeaderText>
                    <HeaderParagraph>Personalized, Automated, Effortless</HeaderParagraph>
                    <HeaderParagraph>Investing and Savings.</HeaderParagraph>
                    <Button propOfBtn="button-started">Start investing</Button>
                </HeaderElementContainer>
            </HeaderInformContainer>
        </ScrollAnimationStyled>
    );
}