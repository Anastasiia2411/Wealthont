import React from "react";
import  OurAchievementImg  from "../../img/our-achievement-img.png";
import { SavingAndInvestingDiv,  SavingAndInvestingTextWrapper, SavingAndInvestingHeader, SavingAndInvestingParagraph, OurAchievementImgTag } from "./SavingAndInvesting.style";

export default function SavingAndInvesting(){
    return(
        <SavingAndInvestingDiv>
            <div>
            <SavingAndInvestingTextWrapper>
                <SavingAndInvestingHeader>Saving and investing. All while you’re relaxing.</SavingAndInvestingHeader>
                <SavingAndInvestingParagraph>Tell us what you’re saving for, and we’ll automatically set aside extra cash to hit your goals. And since we connect with all your accounts, you only need one app to watch your wealth grow.</SavingAndInvestingParagraph>
            </SavingAndInvestingTextWrapper>
            <OurAchievementImgTag src={OurAchievementImg} alt=""/>
            </div>
        </SavingAndInvestingDiv>
    )
}