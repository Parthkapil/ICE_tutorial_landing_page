import React, { useState } from "react";
import Video from "../../videos/video.mp4"; // add video path here
import { Button } from "../ButtonElements"; //importing our cutom button

//importing styled conponents
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from "./HeroElements";

const HeroSection = ({ data }) => {
	//variable for setting hover animation
	const [hover, setHover] = useState(false);

	//change the hover boolean, when this function is called
	const onHover = () => {
		setHover(!hover);
	};

	return (
		// this is the container that holds all the components
		<HeroContainer>
			{/* setting background as video */}
			<HeroBg>
				{/* here we set the video, these attributes are important as they play the video on loop and mute it. */}
				<VideoBg autoPlay={true} loop={true} muted={true} src={Video} type="video/mp4" />
			</HeroBg>
			{/* This is the heading section */}
			<HeroContent>
				{/* this is the big banner */}
				<HeroH1>{data.heading}</HeroH1>

				<HeroP>{data.moto}</HeroP>
				<HeroBtnWrapper>
					<Button
						to="/joinus"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary="false"
						dark="true"
					>
						{data.btnText} {hover ? <ArrowForward /> : <ArrowRight />}
						{/* when we hover over the button then we change the icons */}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
