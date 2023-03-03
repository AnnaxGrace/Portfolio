import React, { useState } from "react";
import About from "./About";
import SideNavContainer from "./sideNav/SideNavContainer";
import "./landing.css"
import Resume from "./Resume";
import Skills from "./Skills";



function LandingContainer() {

    const [navLinkShow, setNavLinkShow] = useState({ about: "hide", skills: "hide" })
    const [skillsExplanation, setSkillsExplanation] = useState({ terraform: "hide", aws: "hide" })

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
        console.log(skillsExplanation)
        setSkillsExplanation({ ...skillsExplanation, [skill]: "show" })
    }

    function closeLinks() {
        console.log(navLinkShow)
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
            </div>
        </div>
    )
}

export default LandingContainer;