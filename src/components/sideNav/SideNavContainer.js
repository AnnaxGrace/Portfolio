import React, { useState } from "react";
import Cloud from "./Cloud";
import "./sideNav.css"

function SideNavContainer() {

    return (
        <div className="col-lg-5 col-md-12 col-sm-12 p-0 mb-3">
            <Cloud />
        </div>
    )
}

export default SideNavContainer;