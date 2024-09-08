import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {

    const codedDescription = (
        <span>
           Since diving into cybersecurity, I’ve worked on a range of projects that showcase my passion for <strong>incident response, GRC, and cloud security</strong>. All projects are open-source, and I welcome any feedback or collaboration. I'm continually researching advanced security technologies and their integration into future projects, such as enhancing threat detection and automating compliance processes.
        </span>
    )

    const codedTitle = (
        <span>
            Each project tile contains production and Git repo links. Feel free to explore and contribute!
        </span>
    )
    useEffect(() => {
		document.title = `Projects | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
                            {INFO.project.title !== "" ? INFO.project.title : codedTitle}
						</div>

						<div className="subtitle projects-subtitle">
                            {INFO.project.description !== "" ? INFO.project.description : codedDescription}
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
