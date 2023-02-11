import React from "react";
import { HeaderNavigationLink, HeaderNavigationUl, HeaderAdaptiveNavigation } from "./HeaderNavigation.style";

export default function HeaderNavigation() {
    return (
        <>
            <HeaderNavigationUl>
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