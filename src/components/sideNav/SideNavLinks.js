
function SideNavLinks({showClickedNavLink}) {

    return (
        <div className="side-wrapper">
            <div className="raindrops">
                <div id="links-row">
                    <a onClick={() => showClickedNavLink('skills')}>
                        <p>about me</p>
                    </a>
                    <a  onClick={() => showClickedNavLink('aboutMe')}>
                        <p>skills</p>
                    </a>
                    <a data-toggle="modal" data-target="#resumeModal">
                        <p>resume</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SideNavLinks;