import telephone from "../../img/telephone-img.png";
import React from "react";
import { Button } from "./Buttons.style";
import {
    AboutUsButtonWrapper,
    AboutUsDiv,
    AboutUsTextWrapper,
    AboutUsTextWrapperHeader,
    AboutUsTextWrapperParagraph, FirstMessage,
    IconContainer,
    MessageAccountInformation, MessageAccountInformationMainText,
    MessageAccountInformationMessageHeader, MessageAccountInformationTimeMenager, SecondMessage,
    TechnologiesWrapper,
    Telephone, ThirdMessage
} from "./AboutUs.style";

export default function AboutUs() {
    return (
        <AboutUsDiv>
            <AboutUsTextWrapper sideProperty="right">
                <AboutUsTextWrapperHeader>
                    Investing isn’t easy. We just make it feel that way.
                </AboutUsTextWrapperHeader>
                <AboutUsTextWrapperParagraph>
                    Let us customize a portfolio just for you or build it yourself, and our powerful automation
                    will
                    make the most of your investments, optimizing your performance and helping lower your taxes.
                </AboutUsTextWrapperParagraph>
                <AboutUsButtonWrapper>
                    <Button propOfBtn="button-started">Start investing</Button>
                    <Button propOfBtn="button-log-in">Learn more</Button>
                </AboutUsButtonWrapper>
            </AboutUsTextWrapper>
            <TechnologiesWrapper>
                <Telephone src={telephone} alt="telephone"/>
                <div>
                    <FirstMessage>
                        <MessageAccountInformation>
                            <div>
                                <IconContainer>
                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M12.132 10.5669V10.5349C12.1183 10.515 12.1014 10.4974 12.082 10.4829C9.62099 8.52995 9.93099 4.44395 10.63 0.651948C10.658 0.498948 10.677 0.396948 10.552 0.381948C9.75699 0.291948 7.10699 0.712948 6.34599 0.914948C6.14799 0.967948 6.13099 1.02395 6.12699 1.14495C5.91899 8.73695 10.715 10.3259 12.017 10.5729C12.047 10.5789 12.113 10.5859 12.132 10.5669V10.5669ZM5.20799 3.27695C4.23199 3.46195 3.32799 3.82295 2.54599 4.14695C2.47699 4.16695 2.36699 4.28095 2.39599 4.42195C2.70399 5.95595 4.20799 10.2799 9.95899 10.6169C10.092 10.6229 10.225 10.5989 10.121 10.5369C9.34499 9.95695 6.58699 9.35995 5.45999 3.49495C5.44799 3.43495 5.44999 3.20695 5.20799 3.27695ZM2.44799 6.87695C2.10599 7.07795 1.22199 7.64195 0.90499 7.93295C0.84299 7.98995 0.854989 8.03095 0.881989 8.12895C1.13799 9.03695 2.64799 10.6289 6.39799 10.5049C6.57499 10.4989 6.57599 10.4459 6.48299 10.3799C6.42299 10.3359 5.23799 9.96595 4.15399 8.99595C3.61199 8.50995 3.06099 7.77295 2.69099 7.07195C2.59899 6.87995 2.55199 6.81595 2.44799 6.87695V6.87695Z"
                                              fill="white"/>
                                    </svg>
                                </IconContainer>
                                <MessageAccountInformationMessageHeader>Wealthfront</MessageAccountInformationMessageHeader>
                            </div>
                            <MessageAccountInformationTimeMenager>now</MessageAccountInformationTimeMenager>
                        </MessageAccountInformation>
                        <div>
                            <MessageAccountInformationMainText>
                                We automatically invested your $500 deposit.
                            </MessageAccountInformationMainText>
                        </div>
                    </FirstMessage>
                    <SecondMessage>
                        <MessageAccountInformation>
                            <div>
                                <IconContainer>
                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M12.132 10.5669V10.5349C12.1183 10.515 12.1014 10.4974 12.082 10.4829C9.62099 8.52995 9.93099 4.44395 10.63 0.651948C10.658 0.498948 10.677 0.396948 10.552 0.381948C9.75699 0.291948 7.10699 0.712948 6.34599 0.914948C6.14799 0.967948 6.13099 1.02395 6.12699 1.14495C5.91899 8.73695 10.715 10.3259 12.017 10.5729C12.047 10.5789 12.113 10.5859 12.132 10.5669V10.5669ZM5.20799 3.27695C4.23199 3.46195 3.32799 3.82295 2.54599 4.14695C2.47699 4.16695 2.36699 4.28095 2.39599 4.42195C2.70399 5.95595 4.20799 10.2799 9.95899 10.6169C10.092 10.6229 10.225 10.5989 10.121 10.5369C9.34499 9.95695 6.58699 9.35995 5.45999 3.49495C5.44799 3.43495 5.44999 3.20695 5.20799 3.27695ZM2.44799 6.87695C2.10599 7.07795 1.22199 7.64195 0.90499 7.93295C0.84299 7.98995 0.854989 8.03095 0.881989 8.12895C1.13799 9.03695 2.64799 10.6289 6.39799 10.5049C6.57499 10.4989 6.57599 10.4459 6.48299 10.3799C6.42299 10.3359 5.23799 9.96595 4.15399 8.99595C3.61199 8.50995 3.06099 7.77295 2.69099 7.07195C2.59899 6.87995 2.55199 6.81595 2.44799 6.87695V6.87695Z"
                                              fill="white"/>
                                    </svg>
                                </IconContainer>
                                <MessageAccountInformationMessageHeader>Wealthfront</MessageAccountInformationMessageHeader>
                            </div>
                            <MessageAccountInformationTimeMenager>now</MessageAccountInformationTimeMenager>
                        </MessageAccountInformation>
                        <div>
                            <MessageAccountInformationMainText>
                                We saved you $78.11 on your taxes.
                            </MessageAccountInformationMainText>
                        </div>
                    </SecondMessage>
                    <ThirdMessage>
                        <MessageAccountInformation>
                            <div>
                                <IconContainer>
                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M12.132 10.5669V10.5349C12.1183 10.515 12.1014 10.4974 12.082 10.4829C9.62099 8.52995 9.93099 4.44395 10.63 0.651948C10.658 0.498948 10.677 0.396948 10.552 0.381948C9.75699 0.291948 7.10699 0.712948 6.34599 0.914948C6.14799 0.967948 6.13099 1.02395 6.12699 1.14495C5.91899 8.73695 10.715 10.3259 12.017 10.5729C12.047 10.5789 12.113 10.5859 12.132 10.5669V10.5669ZM5.20799 3.27695C4.23199 3.46195 3.32799 3.82295 2.54599 4.14695C2.47699 4.16695 2.36699 4.28095 2.39599 4.42195C2.70399 5.95595 4.20799 10.2799 9.95899 10.6169C10.092 10.6229 10.225 10.5989 10.121 10.5369C9.34499 9.95695 6.58699 9.35995 5.45999 3.49495C5.44799 3.43495 5.44999 3.20695 5.20799 3.27695ZM2.44799 6.87695C2.10599 7.07795 1.22199 7.64195 0.90499 7.93295C0.84299 7.98995 0.854989 8.03095 0.881989 8.12895C1.13799 9.03695 2.64799 10.6289 6.39799 10.5049C6.57499 10.4989 6.57599 10.4459 6.48299 10.3799C6.42299 10.3359 5.23799 9.96595 4.15399 8.99595C3.61199 8.50995 3.06099 7.77295 2.69099 7.07195C2.59899 6.87995 2.55199 6.81595 2.44799 6.87695V6.87695Z"
                                              fill="white"/>
                                    </svg>
                                </IconContainer>
                                <MessageAccountInformationMessageHeader>Wealthfront</MessageAccountInformationMessageHeader>
                            </div>
                            <MessageAccountInformationTimeMenager>now</MessageAccountInformationTimeMenager>
                        </MessageAccountInformation>
                        <div>
                            <MessageAccountInformationMainText>
                                We saved you $78.11 on your shop!!
                            </MessageAccountInformationMainText>
                        </div>
                    </ThirdMessage>
                </div>
            </TechnologiesWrapper>
        </AboutUsDiv>
    );
}
