import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = ({ data }) => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							{data.logo}
						</SocialLogo>
						<WebsiteRights>
							{data.logo} @ {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href={data.facebookLink} target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href={data.instaLink} target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href={data.twitterLink} target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
