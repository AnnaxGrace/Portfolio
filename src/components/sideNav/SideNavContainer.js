import Cloud from "./Cloud";
import SideNavLinks from "./SideNavLinks";
import "./sideNav.css"

function SideNavContainer({showClickedNavLink}) {

    return (
        <div className="col-lg-5 col-md-12 col-sm-12 p-0 mb-3">
            <Cloud />
            <SideNavLinks 
                showClickedNavLink={showClickedNavLink}
            />
        </div>
    )
}

export default SideNavContainer;