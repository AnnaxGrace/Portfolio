
function SideNavLinks({showClickedNavLink}) {

    return (
        <div className="side-wrapper">
            <div className="raindrops">
                <div id="top-row">
                    <a class="raindrop" onClick={() => showClickedNavLink('skills')}>
                        <p class="raintext">about me</p>
                    </a>
                    <a class="raindrop" onClick={() => showClickedNavLink('aboutMe')}>
                        <p class="raintext">skills</p>
                    </a>
                    <a class="raindrop" data-toggle="modal" data-target="#resumeModal">
                        <p class="raintext">resume</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SideNavLinks;