import SvgLogo from "./SvgLogo";
import HeaderNavigation from "./HeaderNavigation";
import { Button } from "../Global/Buttons.style";
import React, { useEffect, useState, useRef } from "react";
import {
    ButtonContainer,
    HeaderAdaptiveNavigation,
    HeaderElementContainer,
    HeaderNavigationUl
} from "./HeaderNavigation.style";
import { ScrollAnimationStyled } from "../Animation/ScrollAnimation.style";

export default function HeaderMenu() {
    const [value, setValue] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuBigSize, setMenuBigSize] = useState(true)



    const menuRef = useRef();

    useEffect(() => {
        function handleResize() {
            const windowInnerWidth = window.innerWidth;
            if (windowInnerWidth > 791) {
                setValue(true);
                setMenuBigSize(true)
            } else if (windowInnerWidth <= 791) {
                setValue(false);
                setMenuBigSize(false)
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
            if (menuRef.current && !menuRef.current.contains(e.target)) {
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
        setIsMenuOpen(true)
        if(value===true){
            closeModal()
        }
    }
    function closeModal() {
        setIsMenuOpen(false)
        setValue(false);
    }

    return (
        <>
        <ScrollAnimationStyled>
            <HeaderElementContainer ref={menuRef}>
                <SvgLogo fill={"#230B59"}/>
                {menuBigSize ?  <HeaderNavigation/> : null}
                <div>
                    <HeaderAdaptiveNavigation isOpen={isMenuOpen}  onClick={openModal}>
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

        </ScrollAnimationStyled>
         {value === true && !menuBigSize? <HeaderNavigation/> : null}
        </>
    );
}