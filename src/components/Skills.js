import SkillsExplanation from "./SkillsExplanation";


function Skills({ isDesktop, navLinkShow, closeLinks, showSkill, skillsExplanation, returnToAllSkills }) {

    return (
        <>
            {isDesktop ? (

                <div id={navLinkShow.skills} className="pt-3 col-lg-7 col-md-12 col-sm-12 justify-content-center">
                    <button type="button" className="btn skills-close-btn" onClick={closeLinks}>x</button>
                    <div className="row mb-3 skills-list">

                        <ul className="col-md-4 list-group list-group-flush">
                            <li className="list-group-item clickable-skills" onClick={() => showSkill('automation')}>Automation and Orchestration</li>
                            <li className="list-group-item clickable-skills">Frontend Web Development</li>
                            <li className="list-group-item clickable-skills">Infrastructure as Code</li>
                            <li className="list-group-item clickable-skills">Backend Web Development</li>
                            <li className="list-group-item clickable-skills">JavaScript, React</li>
                            <li className="list-group-item clickable-skills">Node.js</li>
                            <li className="list-group-item clickable-skills">Scripting Languages</li>
                            <li className="list-group-item clickable-skills">SQL</li>
                        </ul>

                        <SkillsExplanation
                            isDesktop={isDesktop}
                            skillsExplanation={skillsExplanation}
                            returnToAllSkills={returnToAllSkills}
                        />

                    </div>


                    <div className="row justify-content-center certs mb-5">
                        <img className="clickable-skills-certs" onClick={() => showSkill('terraform')} src={require("../assets/images/terraform_003_badge.png")} alt="Terraform associate Icon" ></img>
                        <img className="clickable-skills-certs" onClick={() => showSkill('aws')} src={require("../assets/images/aws_professional_badge.png")} alt="AWS SAP Certification icon" ></img>
                        <img className="clickable-skills-certs" onClick={() => showSkill('gcp')} src={require("../assets/images/gcp_ace_badge.png")} alt="GCP associate Icon" ></img>
                        <img className="clickable-skills-certs" onClick={() => showSkill('SAFe')} src={require("../assets/images/safe_6_badge.png")} alt="Safe Certification icon" ></img>
                    </div>

                </div>
            ) : (
                <div id={navLinkShow.skills} className="pt-3 col-lg-7 col-md-12 col-sm-12 justify-content-center links-height">
                    <button type="button" className="btn skills-close-btn" onClick={closeLinks}>x</button>
                    <div className="row mb-3 skills-list">

                        <ul id={skillsExplanation.choices} className="col list-group list-group-flush">
                            <li className="list-group-item clickable-skills">HTML</li>
                            <li className="list-group-item clickable-skills">IaC</li>
                            <li className="list-group-item clickable-skills">Java</li>
                            <li className="bottom-skill clickable-skills" onClick={() => showSkill('automation')}>Automation and Orchestration</li>
                        </ul>
                        <ul id={skillsExplanation.choices} className="col list-group list-group-flush">
                            <li className="list-group-item clickable-skills">JavaScript, React</li>
                            <li className="list-group-item clickable-skills">Node.js</li>
                            <li className="list-group-item clickable-skills">PowerShell</li>
                            <li className="bottom-skill clickable-skills">SQL</li>
                        </ul>

                        <SkillsExplanation
                            isDesktop={isDesktop}
                            skillsExplanation={skillsExplanation}
                            returnToAllSkills={returnToAllSkills}
                        />
                    </div>


                    <div id={skillsExplanation.choices} className="row justify-content-center certs mb-5">
                        <img className="clickable-skills-certs" onClick={() => showSkill('terraform')} src={require("../assets/images/terraform_003_badge.png")} alt="Terraform associate Icon" ></img>
                        <img className="clickable-skills-certs" onClick={() => showSkill('aws')} src={require("../assets/images/aws_professional_badge.png")} alt="AWS SAA Certification icon" ></img>
                        <img className="clickable-skills-certs" onClick={() => showSkill('gcp')} src={require("../assets/images/gcp_ace_badge.png")} alt="GCP associate Icon" ></img>
                        <img className="clickable-skills-certs" onClick={() => showSkill('SAFe')} src={require("../assets/images/safe_6_badge.png")} alt="Safe Certification icon" ></img>
                    </div>

                </div>
            )}
        </>
    )
}

export default Skills;