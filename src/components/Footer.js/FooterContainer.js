import "./footer.css"
function FooterContainer() {

    return (
        <footer className="row justify-content-center">
            <div className="col">
                <div className="row justify-content-center">
                    <p class="top-name justify-content-center">ANNA GRACE PENNINGTON</p>
                </div>
                <div className="row justify-content-center">
                    <a href="https://github.com/AnnaxGrace" target="_blank" className="fab fa-github icon fa-3x d-flex " rel="noopener noreferrer"></a>
                    <a href="https://linkedin.com/in/anna-grace-conover" target="_blank" className="fab fa-linkedin icon fa-3x d-flex" rel="noopener noreferrer"></a>
                    <div class="git-link">
                        <a href="mailto:annaxgrace2022@gmail.com" className="fas fa-envelope icon fa-3x d-flex" rel="noopener noreferrer"></a>
                    </div>
                </div>
                <div className="row justify-content-center">
                    test
                </div>
            </div>
        </footer>

        //  <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div> 

    )
}

export default FooterContainer;