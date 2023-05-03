import React, { useState } from "react";
import About from "./About";
import SideNavContainer from "./sideNav/SideNavContainer";
import "./landing.css"
import Resume from "./Resume";
import Skills from "./Skills";
import FooterContainer from "./Footer.js/FooterContainer";



function LandingContainer() {

    const [navLinkShow, setNavLinkShow] = useState({ about: "hide", skills: "hide" })
    const [skillsExplanation, setSkillsExplanation] = useState({ terraform: "hide", aws: "hide", gcp: "hide", SAFe: "hide" })

    function showClickedNavLink(link) {
        Object.keys(navLinkShow).forEach((item) => {
            if (item !== [link]) {
                navLinkShow[item] = "hide"
            }
        })
        setNavLinkShow({ ...navLinkShow, [link]: "show" })
    }

    function showSkill(skill) {
        Object.keys(skillsExplanation).forEach((item) => {
            if (item !== [skill]) {
                skillsExplanation[item] = "hide"
            }
        })
        setSkillsExplanation({ ...skillsExplanation, [skill]: "show" })
    }

    function closeLinks() {
        Object.keys(navLinkShow).forEach((item) => {
            navLinkShow[item] = "hide"
        })
        setNavLinkShow({ ...navLinkShow })

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <SideNavContainer
                    showClickedNavLink={showClickedNavLink}
                />
                <div id={navLinkShow.about === "hide" && navLinkShow.skills === "hide" ? "show" : "hide"} className="links-height">

                </div>
                <About
                    navLinkShow={navLinkShow}
                    closeLinks={closeLinks}
                />
                <Resume />
                <Skills
                    navLinkShow={navLinkShow}
                    closeLinks={closeLinks}
                    showSkill={showSkill}
                    skillsExplanation={skillsExplanation}
                />
                {/* <FooterContainer /> */}
            </div>
        </div>
    )
}

export default LandingContainer;