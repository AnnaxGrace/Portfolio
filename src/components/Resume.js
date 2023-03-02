
function Resume({ navLinkShow, closeLinks }) {

    return (
        <div class="modal fade" id="resumeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close close-btn-resume" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <p class="mobile-download">Hey! Looks like you're looking at this screen on mobile. Download the PDF <a id="mobile-download-here" target="_blank" href="https://drive.google.com/file/d/1OGL_IKpI9Lo0efmMWescbduoHlTOfIGt/view?usp=sharing">here</a>, or check out this page in a desktop!</p>
                        <embed class="pdf" src={require("../assets/documents//Anna Grace Conover Portfolio Resume.pdf")} width="100%" height="700px" />
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;