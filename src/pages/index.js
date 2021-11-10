import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import TeamsSection from "../components/TeamSection";
import Footer from "../components/Footer";
import { heroData, navBarData, pageObjOne, pageObjTwo, teamData, footerData } from "../data";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} data={navBarData} />
			<Navbar toggle={toggle} data={navBarData} />
			<HeroSection data={heroData} />
			<InfoSection {...pageObjOne} />
			<InfoSection {...pageObjTwo} />
			<TeamsSection data={teamData} />
			<Footer data={footerData} />
		</>
	);
};

export default Home;
