

function SkillsExplanation({ isDesktop, skillsExplanation, returnToAllSkills }) {

    return (
        <>

            {/* <div id={skillsExplanation.automation} className="col-md-8 cert-paragraph">
                <p>
                    "The Terraform Associate certification is for Cloud Engineers specializing in operations, IT, or development who know the basic concepts and skills associated with open source HashiCorp Terraform." <em><a href="https://www.hashicorp.com/certification/terraform-associate">HashiCorp</a></em>
                </p>
                <p>
                    Terraform is a cloud-agnostic Infrastructure-as-Code tool. I have built solutions using Terraform for GCP, AWS, and Azure. I am proficient in other Terraform related HashiCorp tools, such as Terraform Cloud and Terraform Sentinel. Terraform is one of my favorite tools, and really enables DevOps practices such as automation and collaboration.
                </p>
            </div>

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
            </div> */}


            {/* <div id={skillsExplanation.automation} className="col-md-8 cert-paragraph">
                <p>
                    "The Terraform Associate certification is for Cloud Engineers specializing in operations, IT, or development who know the basic concepts and skills associated with open source HashiCorp Terraform." <em><a href="https://www.hashicorp.com/certification/terraform-associate">HashiCorp</a></em>
                </p>
                <p>
                    Terraform is a cloud-agnostic Infrastructure-as-Code tool. I have built solutions using Terraform for GCP, AWS, and Azure. I am proficient in other Terraform related HashiCorp tools, such as Terraform Cloud and Terraform Sentinel. Terraform is one of my favorite tools, and really enables DevOps practices such as automation and collaboration.
                </p>
                {!isDesktop &&
                    <p className="go-back-all-skills" onClick={returnToAllSkills}> <i className="back-arrow-all-skills fas fa-caret-left"></i> Back to all skills </p>
                }
            </div> */}



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
                    "A Certified SAFe® 5 Practitioner (SP) is a SAFe team member professional responsible for using Scrum, Kanban, and XP in a SAFe environment. Key areas of responsibility include planning Program Increments and iterations, breaking requirements into stories, developing incrementally with built-in quality, demoing value at a team and program level, and problem solving impediments to drive relentless improvement." <em><a href="https://www.credly.com/org/scaled-agile/badge/certified-safe-5-practitioner#:~:text=Issued%20by%20Scaled%20Agile%20Inc,XP%20in%20a%20SAFe%20environment.">Credly</a></em>
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