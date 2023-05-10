
function Resume() {

    return (
        <div className="modal fade" id="resumeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close close-btn-resume" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <p className="mobile-download">Hey! Looks like you're looking at this screen on mobile. Download the PDF <a id="mobile-download-here" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1WobeiUdTc7GvTGmxYSbDrRSc0oWlsS-s/view?usp=sharing">here</a>, or check out this page in a desktop!</p>
                        <embed className="pdf" src={require("../assets/documents//Anna_Grace_Pennington_resume.pdf")} width="100%" height="700px" />
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;