import "./sideNav.css"
import SideNavLinks from "./SideNavLinks";
import React, { useEffect, useState } from "react";


function Cloud({ showClickedNavLink }) {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1450);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className='cloud'>

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
                <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                <g><g><path
                    className={isDesktop ? "cloudDrawn" : "cloudDrawnMobile"}
                    d="M808.5,772.2h-617c-79.9,0-145.2-65.3-145.2-145.2c0-69,47.2-127,112.5-141.6c-3.6-14.5-3.6-25.4-3.6-39.9c0-119.8,98-217.8,217.8-217.8c94.4,0,174.2,61.7,206.9,145.2c29-21.8,65.3-36.3,101.6-36.3c87.1,0,156.1,65.3,163.3,148.8C906.5,500,953.7,558.1,953.7,627C953.7,706.9,888.4,772.2,808.5,772.2z" />
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
            </svg>

            <div className="bouncing-text">
                <div className="h letter">H</div>
                <div className="e letter">e</div>
                <div className="a letter">a</div>
                <div className="d letter">d</div>
                <div className="i letter">I</div>
                <div className="n letter">n</div>
                <div className="t letter">T</div>
                <div className="hh2 letter">h</div>
                <div className="e2 letter">e</div>
                <div className="c letter">C</div>
                <div className="l letter">l</div>
                <div className="o letter">o</div>
                <div className="u letter">u</div>
                <div className="d2 letter">d</div>
                <div className="s letter">s</div>

            </div>

            <SideNavLinks
                showClickedNavLink={showClickedNavLink}
            />

        </div>
    )
}

export default Cloud;