import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Josh Hathcock. All Rights Reserved.`,
  author: {
    name: "Josh Hathcock",
    accounts: [
      {
        url: "https://github.com/jdspiral",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/muhammad_ahmaad",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/m_ahmad",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/muhammad-ahmad20",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://www.quora.com/profile/Muhammad-Ahmad-66",
        label: "Quora Account",
        type: "red",
        icon: <FaQuora />
      },
      {
        url: "mailto:joshdhathcock@gmail.com",
        label: "Mail Josh",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
