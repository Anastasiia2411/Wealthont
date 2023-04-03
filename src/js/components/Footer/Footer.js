import React from "react";
import SvgLogo from "../Header/SvgLogo";
import { FooterContainer, FooterList } from "./Footer.style";
import ScrollAnimation from "../Animation/ScrollAnimation";
import { ScrollAnimationStyled } from "../Animation/ScrollAnimation.style";

export default function Footer() {
    return (
        <ScrollAnimationStyled>
            <FooterContainer>
                <div>
                    <SvgLogo fill={"#FFFFFF"}/>
                </div>
                <FooterList>
                    <li>
                        <a href="#">
                            Careers
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Help center
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Homeownership
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Legal
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            College
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Methodology
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Planning
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Our PhD Team
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Retirement
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Back to top
                        </a>
                    </li>
                </FooterList>
            </FooterContainer>
        </ScrollAnimationStyled>
    );
}