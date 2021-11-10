import React from "react";
import {
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	SevicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesP,
} from "./TeamSectionElements";

const TeamsSection = ({ data }) => {
	return (
		<ServicesContainer id="team">
			<ServicesH1>Our Team</ServicesH1>
			<SevicesWrapper>
				{data.map(member => (
					<ServicesCard>
						<ServicesIcon src={require(`../../images/${member.imgPath}`).default} />
						<ServicesH2>{member.name}</ServicesH2>
						<ServicesP>{member.designation}</ServicesP>
					</ServicesCard>
				))}
			</SevicesWrapper>
		</ServicesContainer>
	);
};

export default TeamsSection;
