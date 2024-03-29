
function SideNavLinks({ showClickedNavLink }) {

    return (
        <div className="side-wrapper">
            <div className="raindrops">
                <div id="links-row">
                    <button onClick={() => showClickedNavLink('about')}>
                        <p>about</p>
                    </button>
                    <button onClick={() => showClickedNavLink('skills')}>
                        <p>skills</p>
                    </button>
                    <button onClick={() => showClickedNavLink('test')} data-toggle="modal" data-target="#resumeModal">
                        <p>resume</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideNavLinks;