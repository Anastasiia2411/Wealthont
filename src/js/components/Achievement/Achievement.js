import nerdwallet from "../../../img/nerdwallet.png";
import investopedia from "../../../img/investopedia.png";
import React from "react";
import {
    NerdwalletImg,
    OurAchievementList,
    OurAchievementListEl,
    OurAchievementListElHeader,
    OurAchievementListElParagraph
} from "./Achievement.style";

export default function Achievement() {
    return (
        <OurAchievementList>
            <OurAchievementListEl>
                <NerdwalletImg src={nerdwallet} alt="nerdwallet"/>
                <OurAchievementListElParagraph>Best Robo-advisor, 2019</OurAchievementListElParagraph>
                <OurAchievementListElParagraph>Best Cash Management App, 2020</OurAchievementListElParagraph>
            </OurAchievementListEl>
            <OurAchievementListEl>
                <NerdwalletImg src={investopedia} alt="investopedia"/>
                <OurAchievementListElParagraph>Best Robo-advisor, 2020</OurAchievementListElParagraph>
            </OurAchievementListEl>
            <OurAchievementListEl>
                <OurAchievementListElHeader>450K+</OurAchievementListElHeader>
                <OurAchievementListElParagraph>Trusted clients</OurAchievementListElParagraph>
            </OurAchievementListEl>
            <OurAchievementListEl>
                <OurAchievementListElHeader>$26B+</OurAchievementListElHeader>
                <OurAchievementListElParagraph>In client funds</OurAchievementListElParagraph>
            </OurAchievementListEl>
            <OurAchievementListEl>
                <OurAchievementListElHeader> 4.9
                    <span>
                                 <svg width="20" height="20" viewBox="0 0 22 22" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                   <path
                                       d="M10.4133 1.40591C10.6637 0.633819 11.7563 0.633819 12.0067 1.40591L13.9616 7.42134C14.0162 7.58957 14.1226 7.7362 14.2656 7.84026C14.4086 7.94432 14.5809 8.00047 14.7578 8.00068H21.0854C21.8962 8.00068 22.2346 9.03991 21.5778 9.51763L16.4591 13.2356C16.3161 13.3397 16.2097 13.4864 16.1552 13.6546C16.1006 13.8228 16.1006 14.004 16.1553 14.1722L18.1101 20.1887C18.3616 20.9608 17.4774 21.603 16.8205 21.1263L11.7019 17.4072C11.5587 17.3033 11.3864 17.2474 11.2095 17.2474C11.0326 17.2474 10.8602 17.3033 10.7171 17.4072L5.59948 21.1263C4.94262 21.603 4.05948 20.9608 4.30986 20.1887L6.26472 14.1722C6.31937 14.004 6.31942 13.8228 6.26485 13.6546C6.21028 13.4864 6.10389 13.3397 5.96091 13.2356L0.841192 9.51658C0.184335 9.03991 0.521668 8.00068 1.33357 8.00068H7.66014C7.83688 8.00055 8.00905 7.94455 8.15205 7.84069C8.29504 7.73683 8.40155 7.59042 8.45633 7.42239L10.4133 1.40487V1.40591Z"
                                       fill="#230B59"/>
                                   </svg>
                                 </span>
                </OurAchievementListElHeader>
                <OurAchievementListElParagraph>Apple App <span>Store</span></OurAchievementListElParagraph>
            </OurAchievementListEl>
            <OurAchievementListEl>
                <OurAchievementListElHeader>4.5
                    <span>
                                <svg width="20" height="20" viewBox="0 0 22 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.4133 1.40591C10.6637 0.633819 11.7563 0.633819 12.0067 1.40591L13.9616 7.42134C14.0162 7.58957 14.1226 7.7362 14.2656 7.84026C14.4086 7.94432 14.5809 8.00047 14.7578 8.00068H21.0854C21.8962 8.00068 22.2346 9.03991 21.5778 9.51763L16.4591 13.2356C16.3161 13.3397 16.2097 13.4864 16.1552 13.6546C16.1006 13.8228 16.1006 14.004 16.1553 14.1722L18.1101 20.1887C18.3616 20.9608 17.4774 21.603 16.8205 21.1263L11.7019 17.4072C11.5587 17.3033 11.3864 17.2474 11.2095 17.2474C11.0326 17.2474 10.8602 17.3033 10.7171 17.4072L5.59948 21.1263C4.94262 21.603 4.05948 20.9608 4.30986 20.1887L6.26472 14.1722C6.31937 14.004 6.31942 13.8228 6.26485 13.6546C6.21028 13.4864 6.10389 13.3397 5.96091 13.2356L0.841192 9.51658C0.184335 9.03991 0.521668 8.00068 1.33357 8.00068H7.66014C7.83688 8.00055 8.00905 7.94455 8.15205 7.84069C8.29504 7.73683 8.40155 7.59042 8.45633 7.42239L10.4133 1.40487V1.40591Z"
                                        fill="#230B59"/>
                                     </svg>
                                 </span>
                </OurAchievementListElHeader>
                <OurAchievementListElParagraph>Google Play<span>Store</span></OurAchievementListElParagraph>
            </OurAchievementListEl>
        </OurAchievementList>
    );
}