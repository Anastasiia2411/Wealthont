import SvgLogo from "./SvgLogo";
import HeaderNavigation from "./HeaderNavigation";
import { Button } from "./Buttons.style";
import * as React from "react";
import {useState} from "react";
import {
    ButtonContainer,
    HeaderAdaptiveNavigation,
    HeaderElementContainer,
    HeaderNavigationUl
} from "./HeaderNavigation.style";

function adaptiveMenu(props) {
    // console.log(HeaderNavigationUl);
    const [value, setValue] = useState(props.showEl);
    console.log(value);
}

export default function HeaderMenu() {
    return (
        <>
            <HeaderElementContainer>
                <SvgLogo fill={"#230B59"}/>
                <HeaderNavigation/>
                <div>
                    <HeaderAdaptiveNavigation showEl="false" onClick={adaptiveMenu}>
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
        </>
    );
}