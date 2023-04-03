import React from "react";
import { OurReviewsSection, CarouselWrapper, StyledCarousel } from "./Reviews.style";
import { Carousel } from "react-responsive-carousel";
import ReviewElement from "./ReviewElement";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ScrollAnimationStyled } from "../Animation/ScrollAnimation.style";

export default function OurReviews() {

    return (
        <ScrollAnimationStyled>
            <OurReviewsSection>
                <CarouselWrapper>
                    <StyledCarousel infiniteLoop
                                    centerSlidePercentage={50}
                                    showStatus={false}
                                    showThumbs={false}
                                    width={1000}
                    >
                        <ReviewElement
                            propsText={"It's the single best resource for both investing, managing retirement and seeing my entire financial picture."}
                            propsCommentatorName={"Joshua B"}/>
                        <ReviewElement
                            propsText={"Wealthfront is the first thing in my life that actually motivated me to save money."}
                            propsCommentatorName={"Isidore"}/>
                        <ReviewElement propsText={"It’s automatic, and I’m lazy."} propsCommentatorName={"Ryan"}/>
                        <ReviewElement
                            propsText={"Wealthfront is the first thing in my life that actually motivated me to save money."}
                            propsCommentatorName={"Isidore"}/>
                        <ReviewElement propsText={"It’s automatic, and I’m lazy."} propsCommentatorName={"Ryan"}/>
                    </StyledCarousel>
                </CarouselWrapper>
            </OurReviewsSection>
        </ScrollAnimationStyled>
    );
}