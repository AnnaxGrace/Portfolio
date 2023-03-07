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
                        "AWS Certified Solutions Architect - Associate showcases knowledge and skills in AWS technology, across a wide range of AWS services. The focus of this certification is on the design of cost and performance optimized solutions, demonstrating a strong understanding of the AWS Well-Architected Framework."  <em><a href="https://www.hashicorp.com/certification/terraform-associate">aws</a></em>
                    </p>
                    <p>
                        One of the popular Cloud Platforms, AWS has a robust list of services. I have worked with a multitude of those services, using CLI, the console, and Terraform.
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