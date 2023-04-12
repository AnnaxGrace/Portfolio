function Skills({ navLinkShow, closeLinks, showSkill, skillsExplanation }) {

    return (
        <div id={navLinkShow.skills} className="pt-3 col-lg-7 col-md-12 col-sm-12 justify-content-center links-height">
            <button type="button" className="btn skills-close-btn" onClick={closeLinks}>x</button>
            <div className="row mb-3 skills-list">

                <ul className="col-md-4 list-group list-group-flush">
                    <li className="list-group-item clickable-skills" onClick={() => showSkill('automation')}>Automation and Orchestration</li>
                    <li className="list-group-item clickable-skills">HTML</li>
                    <li className="list-group-item clickable-skills">IaC</li>
                    <li className="list-group-item clickable-skills">Java</li>
                    <li className="list-group-item clickable-skills">JavaScript, React</li>
                    <li className="list-group-item clickable-skills">Node.js</li>
                    <li className="list-group-item clickable-skills">PowerShell</li>
                    <li className="list-group-item clickable-skills">SQL</li>
                </ul>

                <div id={skillsExplanation.terraform} className="col-md-8 cert-paragraph">
                    <p>
                        "The Terraform Associate certification is for Cloud Engineers specializing in operations, IT, or development who know the basic concepts and skills associated with open source HashiCorp Terraform." <em><a href="https://www.hashicorp.com/certification/terraform-associate">HashiCorp</a></em>
                    </p>
                    <p>
                        Terraform is a cloud-agnostic Infrastructure-as-Code tool. I have built solutions using Terraform for GCP, AWS, and Azure. I am proficient in other Terraform related HashiCorp tools, such as Terraform Cloud and Terraform Sentinel. Terraform is one of my favorite tools, and really enables DevOps practices such as automation and collaboration.
                    </p>
                </div>

                <div id={skillsExplanation.aws} className="col-md-8 cert-paragraph">
                    <p>
                        "AWS Certified Solutions Architect - Associate showcases knowledge and skills in AWS technology, across a wide range of AWS services. The focus of this certification is on the design of cost and performance optimized solutions, demonstrating a strong understanding of the AWS Well-Architected Framework."  <em><a href="https://www.hashicorp.com/certification/terraform-associate">AWS</a></em>
                    </p>
                    <p>
                        One of the popular Cloud Platforms, AWS has a robust list of services. I have worked with a multitude of those services, using CLI, the console, and Terraform.
                    </p>
                </div>

                <div id={skillsExplanation.gcp} className="col-md-8 cert-paragraph">
                    <p>
                        "An Associate Cloud Engineer deploys applications, monitors operations, and manages enterprise solutions. This individual is able to use Google Cloud Console and the command-line interface to perform common platform-based tasks to maintain one or more deployed solutions that leverage Google-managed or self-managed services on Google Cloud." <em><a href="https://cloud.google.com/certification/cloud-engineer">GCP</a></em>
                    </p>
                    <p>
                        One of the popular Cloud Platforms, GCP has a robust list of services. I have worked with a multitude of those services, using CLI, the console, and Terraform.
                    </p>
                </div>

                <div id={skillsExplanation.SAFe} className="col-md-8 cert-paragraph">
                    <p>
                        "A Certified SAFe® 5 Practitioner (SP) is a SAFe team member professional responsible for using Scrum, Kanban, and XP in a SAFe environment. Key areas of responsibility include planning Program Increments and iterations, breaking requirements into stories, developing incrementally with built-in quality, demoing value at a team and program level, and problem solving impediments to drive relentless improvement." <em><a href="https://www.credly.com/org/scaled-agile/badge/certified-safe-5-practitioner#:~:text=Issued%20by%20Scaled%20Agile%20Inc,XP%20in%20a%20SAFe%20environment.">Credly</a></em>
                    </p>
                    <p>
                        This certification indicates knowledge of Agile practices with SAFe (Scaled Agile Framework). I have worked on multiple different Program Increments and multiple different trains, and feel very comfortable jumping into any Agile team.
                    </p>
                </div>

            </div>


            <div className="row justify-content-center certs mb-5">
                <img className="clickable-skills-certs" onClick={() => showSkill('terraform')} src={require("../assets/images/hashicorp-certified-terraform-associate.png")} alt="Terraform associate Icon" ></img>
                <img className="clickable-skills-certs" onClick={() => showSkill('aws')} src={require("../assets/images/aws-certified-solutions-architect-associate.png")} alt="AWS SAA Certification icon" ></img>
                <img className="clickable-skills-certs" onClick={() => showSkill('gcp')} src={require("../assets/images/gcp_ace_badge.png")} alt="GCP associate Icon" ></img>
                <img className="clickable-skills-certs" onClick={() => showSkill('SAFe')} src={require("../assets/images/cert_mark_SP_small_150px.png")} alt="Safe Certification icon" ></img>
            </div>

        </div>
    )
}

export default Skills;