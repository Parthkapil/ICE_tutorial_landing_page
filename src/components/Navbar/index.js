import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

//importing styled components
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

//Requires a parameter: toggle,
const Navbar = ({ toggle, data }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	//this is called to change the nav color on scroll
	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					{/* adding to for Router */}
					<NavLogo to="/" onClick={toggleHome}>
						{data.logo}
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars size={30} />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to={data.link1}
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								{data.link1}
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to={data.link2}
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								{data.link2}
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="team" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
								{data.link3}
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink href={data.btnURL} target="_blank">
							{data.btnText}
						</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
