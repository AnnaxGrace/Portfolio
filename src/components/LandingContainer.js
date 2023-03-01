import React, { useState } from "react";
import About from "./About";
import SideNavContainer from "./sideNav/SideNavContainer";
import "./landing.css"



function LandingContainer() {

    const [navLinkShow, setNavLinkShow] = useState({ about: "hide", skills: "hide" })

    function showClickedNavLink(link) {
        Object.keys(navLinkShow).forEach((item) => {
            if (item !== [link]) {
                navLinkShow[item] = "hide"
            }
        })
        setNavLinkShow({ ...navLinkShow, [link]: "show" })
    }

    function closeLinks() {
        console.log(navLinkShow)
        Object.keys(navLinkShow).forEach((item) => {
            navLinkShow[item] = "hide"
        })
        setNavLinkShow({ ...navLinkShow})

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <SideNavContainer
                    showClickedNavLink={showClickedNavLink}
                />
                <About
                    navLinkShow={navLinkShow}
                    closeLinks={closeLinks}
                />
            </div>
        </div>
    )
}

export default LandingContainer;