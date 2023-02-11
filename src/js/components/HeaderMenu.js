import SvgLogo from "./SvgLogo";
import HeaderNavigation from "./HeaderNavigation";
import { Button } from "./Buttons.style"
import React from "react";
import { ButtonContainer, HeaderAdaptiveNavigation, HeaderElementContainer } from "./HeaderNavigation.style";


export default function HeaderMenu(){
    return(
        <HeaderElementContainer>
            <SvgLogo fill={"#230B59"}/>
            <HeaderNavigation/>
            <div>
            <HeaderAdaptiveNavigation>
                <div></div>
                <div></div>
                <div></div>
            </HeaderAdaptiveNavigation>
            <ButtonContainer>
                <Button propOfBtn="button-log-in">Log in</Button>
                <Button propOfBtn="button-started">Get started</Button>
            </ButtonContainer>
            </div>
        </HeaderElementContainer>

    )
}