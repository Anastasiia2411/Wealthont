import SvgLogo from "./SvgLogo";
import HeaderNavigation from "./HeaderNavigation";
import { Button } from "./Buttons.style";
import React, { useEffect, useState, useRef } from "react";
import {
    ButtonContainer,
    HeaderAdaptiveNavigation,
    HeaderElementContainer,
    HeaderNavigationUl
} from "./HeaderNavigation.style";

export default function HeaderMenu() {
    const [value, setValue] = useState(false);

    const menuRef = useRef();

    useEffect(() => {
        function handleResize() {
            const windowInnerWidth = window.innerWidth;
            if (windowInnerWidth > 791) {
                setValue(true);
            } else if (windowInnerWidth <= 791) {
                setValue(false);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeModal();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.addEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    function openModal() {
        setValue(true);
    }

    function closeModal() {
        setValue(false);
    }

    return (
        <>
            <HeaderElementContainer ref={menuRef}>
                <SvgLogo fill={"#230B59"}/>
                {value === true ? <HeaderNavigation/> : null}
                <div>
                    <HeaderAdaptiveNavigation onClick={openModal}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </HeaderAdaptiveNavigation>
                    <ButtonContainer>
                        <Button propOfBtn="button-log-in" onClick={closeModal}>Log in</Button>
                        <Button propOfBtn="button-started">Get started</Button>
                    </ButtonContainer>
                </div>
            </HeaderElementContainer>
        </>
    );
}