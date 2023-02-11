import { CommentatorsNameParagraph, ReviewCompanyHeader, ReviewParagraph, ReviewWrapper } from "./Reviews.style";
import React from "react";

export default function ReviewElement(props){
    return(
        <ReviewWrapper>
            <div>
        <ReviewCompanyHeader>Testimonial</ReviewCompanyHeader>
        <ReviewParagraph>{props.propsText}</ReviewParagraph>
            </div>
        <CommentatorsNameParagraph>{props.propsCommentatorName}</CommentatorsNameParagraph>
    </ReviewWrapper>)
}