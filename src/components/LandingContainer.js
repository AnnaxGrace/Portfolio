import React, { useState } from "react";
import SideNavContainer from "./sideNav/SideNavContainer";


function LandingContainer() {

    return (
        <div class="container-fluid">
            <div class="row">
                <SideNavContainer />
            </div>
        </div>
    )
}

export default LandingContainer;