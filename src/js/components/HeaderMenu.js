import SvgLogo from "./SvgLogo";
import HeaderNavigation from "./HeaderNavigation";
import { Button } from "./Buttons.style";
import React, { useState } from "react";
import {
    ButtonContainer,
    HeaderAdaptiveNavigation,
    HeaderElementContainer,
    HeaderNavigationUl
} from "./HeaderNavigation.style";

export default function HeaderMenu() {
    let [value, setValue] = useState(true);
    function onClick() {
        if (value === false) {
          return setValue(true);

        } else {
           return setValue(false);
        }
    }
    React.useEffect(() => {
        console.log("component was create");
    }, [value]);

    return (
        <>
            <HeaderElementContainer>
                <SvgLogo fill={"#230B59"}/>
                <HeaderNavigation showValue={value}/>
                <div>
                    <HeaderAdaptiveNavigation onClick={onClick}>
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