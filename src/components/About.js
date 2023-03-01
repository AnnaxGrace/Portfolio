
function About({ navLinkShow, closeLinks }) {

    return (
        <div id={navLinkShow.about} className="mt-5 col-lg-7 col-md-12 col-sm-12 justify-content-center">
                    <button type="button" className="btn mt-4 close-btn" onClick={closeLinks}>x</button>

                    <div className="mt-4">
                        <p className="brand-statement">
                            I'm a DevOps Engineer with a drive for creating code and processes that make the world a better place – focusing on modern and transformative work that consistently enriches the workplace and the community. I have a Bachelor’s Degree in Fine Arts, and as an actor I bring a unique understanding of collaboration, creativity, and storytelling into the industry. My ability and interest in challenges and puzzle-solving always lends itself to my building of a character for a play - and I use the same skills to write code and create infrastructure that is clean and efficient to build your story
                        </p>
                    </div>
                </div>
    )
}

export default About;