import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/about.css";

const About = () => {

    const codedDescription = (
        <span>
            <p>
			Hi, I’m Tanishq Javvaji, a recent Master’s graduate in Cybersecurity from the University of Maryland, with experience in both Incident Response and Governance, Risk, and Compliance (GRC). I am passionate about securing digital environments and ensuring organizations remain compliant with regulatory standards.
			</p>
            <p>
			With hands-on experience in Incident Response, Digital Forensics, and Penetration Testing, I excel at identifying, containing, and mitigating security incidents while analyzing attack vectors to strengthen organizational defenses. I have also conducted thorough IT audits and risk assessments, ensuring adherence to industry regulations and maintaining strong internal controls. By combining my skills in risk management, compliance auditing, and incident response, I aim to enhance security frameworks, support organizational growth, and proactively protect against evolving cyber threats.
            </p>
            <p>
			Beyond my professional pursuits, I am actively involved in the cybersecurity community. I volunteered as a grader for Mathcounts, 
			where I contributed to supporting young mathematicians. I regularly attend industry conferences like OWASP and BSides to stay updated
			on the latest trends and technologies in cybersecurity.
            </p>
        </span>
    )

    const codedTitle = (
        <span>
            Get to know me!
        </span>
    )

    useEffect(() => {
		document.title = `About | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title !== "" ? INFO.about.title : codedTitle}
                                </div>

								<div className="subtitle about-subtitle">
									{INFO.about.description !== "" ? INFO.about.description : codedDescription}
                                </div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="../images/my_images/about_me.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
