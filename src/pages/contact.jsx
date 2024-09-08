import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {

    const codedDescription = (
        <span>
        	I'm happy to jump on a video or phone call to collaborate on cybersecurity projects or discuss topics like incident response, GRC, or other areas of security I’m passionate about. Feel free to send me an email at tanishqj8816@gmail.com or connect with me on the socials below. Let's work together to enhance security and share knowledge!
        </span>
    )

    const codedTitle = (
        <span>
            Please get in touch!
        </span>
    )

    useEffect(() => {
		document.title = `Contact | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-container">
						<div className="title contact-title">
                            {INFO.contact.title !== "" ? INFO.contact.title : codedTitle}
						</div>

						<div className="subtitle contact-subtitle">
                            {INFO.contact.description !== "" ? INFO.contact.description : codedDescription}
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
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

export default Contact;
