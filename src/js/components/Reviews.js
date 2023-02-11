import React from "react";
import { OurReviewsSection, OurReviewsSectionContentWrapper } from "./Reviews.style";
import ReviewElement from "./ReviewElement";

export default function OurReviews() {
    return (
        <OurReviewsSection>
            <OurReviewsSectionContentWrapper>
                <ReviewElement
                    propsText={"It's the single best resource for both investing, managing retirement and seeing my entire financial picture."}
                    propsCommentatorName={"Joshua B"}/>
                <ReviewElement
                    propsText={"Wealthfront is the first thing in my life that actually motivated me to save money."}
                    propsCommentatorName={"Isidore"}/>
                <ReviewElement propsText={"It’s automatic, and I’m lazy."} propsCommentatorName={"Ryan"}/>
            </OurReviewsSectionContentWrapper>
        </OurReviewsSection>
    );
}