const INFO = {
	main: {
		title: "Tanishq Javvaji",
		name: "Tanishq Javvaji",
		email: "tanishqj8816@gmail.com",
		logo: "../headshot.png",
	},

	socials: {
		twitter: "https://x.com/tanishqj5",
		github: "https://github.com/tanishq200",
		linkedin: "https://www.linkedin.com/in/tanishqjavvaji/",
	},

	homepage: {
		title: "",
		description: "",
	},

	about: {
		title: "",
		description: "",
	},

    contact: {
		title: "",
		description: "",
	},

    project: {
		title: "",
		description: "",
	},

	projects: [
		{
			title: "Secure Cloud Migration of Web Application",
			description:
				`Securely migrated a web application to AWS, leveraging GuardDuty, IAM, EC2, and S3 to enhance security and performance. Implemented strict access controls for 50+ users to ensure secure cloud infrastructure.`,
            
            // I recommend not exceeding four logos here, leads to a poor mobile UX
			logos: [
                "../images/aws_logo.jpeg",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/tanishq200/Secure-Cloud-Migration-of-Web-Application",
		},

		{
			title: "Forensic Investigation on Log Files",
			description:
				`the forensic analysis conducted on the log files and related data from a cyber attack on ENPM685 Waffle Co., a tech startup that experienced unauthorized access during the development of their new web-based ordering feature. The investigation aimed to understand how the attack was carried out, identify what the attacker did, and determine the extent of the data accessed.`,
            logos:[
                "../images/splunk_logo.jpeg",
				"../images/Wireshark_logo.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/tanishq200/Forensic-Investigation-on-Log-Files",
		},

		{
			title: "Forensic Investigation on Raw Memory Image",
			description:
				`The forensic analysis conducted on a disk image seized from a suspected malware creator using autopsy, Wireshark and Veracrypt. The investigation employed various digital forensic tools and techniques to analyze the disk image, identify suspicious activities, and uncover hidden data within executable and encrypted files.`,
            logos: [
				"../images/autopsy_logo.png",
                "../images/veracrypt_logo.jpeg",
				"../images/Wireshark_logo.png",

            ],
			linkText1: "GitHub",
			link1: "https://github.com/tanishq200/Forensic-Investigation-on-Raw-Memory-Image",
		}
	],
};

export default INFO;
