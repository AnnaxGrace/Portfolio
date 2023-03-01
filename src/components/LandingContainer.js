import React, { useState } from "react";
import SideNavContainer from "./sideNav/SideNavContainer";


function LandingContainer() {

    const [navLinkShow, setNavLinkShow] = useState({ aboutMe: "hide", skills: "hide" })

    function showClickedNavLink(link) {
        Object.keys(navLinkShow).forEach((item) => {
            if (item !== [link]) {
                navLinkShow[item] = "hide"
            }
        })
        console.log(navLinkShow)
        setNavLinkShow({ ...navLinkShow, [link]: "show" })
    }

    return (
        <div class="container-fluid">
            <div class="row">
                <SideNavContainer
                    showClickedNavLink={showClickedNavLink}
                />
            </div>
        </div>
    )
}

export default LandingContainer;