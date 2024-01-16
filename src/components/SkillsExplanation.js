

function SkillsExplanation({ isDesktop, skillsExplanation, returnToAllSkills }) {

    return (
        <>

            <div id={skillsExplanation.terraform} className="col cert-paragraph">
                <p>
                    "The Terraform Associate certification is for Cloud Engineers specializing in operations, IT, or development who know the basic concepts and skills associated with open source HashiCorp Terraform." <em><a href="https://www.hashicorp.com/certification/terraform-associate">HashiCorp</a></em>
                </p>
                <p>
                    Terraform is a cloud-agnostic Infrastructure-as-Code tool. I have built solutions using Terraform for GCP, AWS, and Azure. I am proficient in other Terraform related HashiCorp tools, such as Terraform Cloud and Terraform Sentinel. Terraform is one of my favorite tools, and really enables DevOps practices such as automation and collaboration.
                </p>
                {!isDesktop &&
                    <p className="go-back-all-skills" onClick={returnToAllSkills}> <i className="back-arrow-all-skills fas fa-caret-left"></i> Back to all skills </p>
                }
            </div>

            <div id={skillsExplanation.aws} className="col-md-8 cert-paragraph">
                <p>
                    "AWS Certified Solutions Architect - Professional showcases advanced knowledge and skills in providing complex solutions to complex problems, optimizing security, cost, and performance, and automating manual processes. This certification is a means for organizations to identify and develop talent with these critical skills for implementing cloud initiatives."  <em><a href="https://aws.amazon.com/certification/certified-solutions-architect-professional/">AWS</a></em>
                </p>
                <p>
                    One of the popular Cloud Platforms, AWS has a robust list of services. I have worked with a multitude of those services, both in design and implementaton. I have interfaced with AWS using CLI, the console, and Terraform.
                </p>
                {!isDesktop &&
                    <p className="go-back-all-skills" onClick={returnToAllSkills}> <i className="back-arrow-all-skills fas fa-caret-left"></i> Back to all skills </p>
                }
            </div>

            <div id={skillsExplanation.gcp} className="col-md-8 cert-paragraph">
                <p>
                    "An Associate Cloud Engineer deploys applications, monitors operations, and manages enterprise solutions. This individual is able to use Google Cloud Console and the command-line interface to perform common platform-based tasks to maintain one or more deployed solutions that leverage Google-managed or self-managed services on Google Cloud." <em><a href="https://cloud.google.com/certification/cloud-engineer">GCP</a></em>
                </p>
                <p>
                    One of the popular Cloud Platforms, GCP has a robust list of services. I have worked with a multitude of those services, using CLI, the console, and Terraform.
                </p>
                {!isDesktop &&
                    <p className="go-back-all-skills" onClick={returnToAllSkills}> <i className="back-arrow-all-skills fas fa-caret-left"></i> Back to all skills </p>
                }
            </div>

            <div id={skillsExplanation.SAFe} className="col-md-8 cert-paragraph">
                <p>
                    "A Certified SAFe® 6 Practitioner is a SAFe team member responsible for connecting to the Customer, planning the work, delivering value, getting feedback, and relentlessly improving." <em><a href="https://www.credly.com/org/scaled-agile/badge/certified-safe-6-practitioner">Credly</a></em>
                </p>
                <p>
                    This certification indicates knowledge of Agile practices with SAFe (Scaled Agile Framework). I have worked on multiple different Program Increments and multiple different trains, and feel very comfortable jumping into any Agile team.
                </p>
                {!isDesktop &&
                    <p className="go-back-all-skills" onClick={returnToAllSkills}> <i className="back-arrow-all-skills fas fa-caret-left"></i> Back to all skills </p>
                }
            </div>

        </>
    )
}

export default SkillsExplanation;