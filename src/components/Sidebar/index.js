import React from "react";
import {
	CloseIcon,
	Icon,
	SidebarContainer,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarBtnWrap,
	SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, data }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to={data.link1} onClick={toggle}>
						{data.link1}
					</SidebarLink>
					<SidebarLink to={data.link2} onClick={toggle}>
						{data.link2}
					</SidebarLink>
					<SidebarLink to="team" onClick={toggle}>
						{data.link3}
					</SidebarLink>
				</SidebarMenu>
				<SidebarBtnWrap>
					<SidebarRoute href={data.btnURL} target="_blank">
						{data.btnText}
					</SidebarRoute>
				</SidebarBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
