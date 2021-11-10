import React from "react";
import { Button } from "../ButtonElements";
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	Column2,
	ImgWrap,
	Img,
} from "./InfoElements";

const InfoSection = ({
	id,
	lightBg,
	lightText,
	topLine,
	headLine,
	description,
	buttonLabel,
	imgStart,
	img,
	alt,
	dark,
	primary,
	darkText,
	dark2,
	buttonRequired,
}) => {
	const image = require(`../../images/${img}`).default;

	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								{buttonRequired && (
									<BtnWrap>
										<Button
											to="home"
											smooth={true}
											duration={500}
											spy={true}
											exact="true"
											offset={-80}
											primary={primary ? 1 : 0}
											dark={dark ? 1 : 0}
											dark2={dark2 ? 1 : 0}
										>
											{buttonLabel}
										</Button>
									</BtnWrap>
								)}
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={image} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default InfoSection;
