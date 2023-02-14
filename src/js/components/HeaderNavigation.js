import React, { useState } from "react";
import { HeaderNavigationLink, HeaderNavigationUl } from "./HeaderNavigation.style";
import styled from "styled-components";

export default function HeaderNavigation(props) {
    console.log(props.showValue)
    return (
        <>
            <HeaderNavigationUl className={props.showValue}>
                <li>
                    <HeaderNavigationLink>
                        Invest
                    </HeaderNavigationLink>
                </li>
                <li>
                    <HeaderNavigationLink>
                        Cash
                    </HeaderNavigationLink>
                </li>
                <li>
                    <HeaderNavigationLink>
                        Borrow
                    </HeaderNavigationLink>
                </li>
                <li>
                    <HeaderNavigationLink>
                        Blog
                    </HeaderNavigationLink>
                </li>
            </HeaderNavigationUl>
        </>
    );
}