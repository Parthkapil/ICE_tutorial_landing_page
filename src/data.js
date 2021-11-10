//////////////////////////////////////////////////////
// parameters for Navigation bar
/////////////////////////////////////////////////////
export const navBarData = {
	logo: "LOGO",
	btnText: "Nav Button", // text for the button
	btnURL: "https://groupme.com/join_group/76453291/e6j4ng9s", // redirect URL on button click
	link1: "link1", // name of link
	link2: "link2",
	link3: "link3",
};

export const heroData = {
	heading: "This is the heading",
	moto: "This is my moto",
	btnText: "button text",
};

export const pageObjOne = {
	id: "link1", // id of the page. it should be the same as name of the link in navbar. (eg-> if link1=about then here id should be about)
	lightBg: true, // true for white, false for black
	lightText: false, // true for white, false for black
	lightTextDesc: false, // true for white, false for black
	topLine: "This is top line",
	headLine: "This is headline",
	description: "Description text here!!",
	darkText: true, // description color: false -> black, true-> white

	//image params
	imgStart: false, // image on left or right
	img: "svg-1.svg", // image path. file should be in the images folder
	alt: "Image not there", // this text will show if we are unable to find the file (if you are getting this maybe the file name is wrong or the file in not present in the images folder)

	//these are the button params
	buttonRequired: true, // need button on page or not
	buttonLabel: "Become a member!", // button text
	dark: false, // button text black or not
	primary: false, // button background: false -> black, true-> white
};

export const pageObjTwo = {
	id: "link2", // id of the page. it should be the same as name of the link in navbar. (eg-> if link1=about then here id should be about)
	lightBg: false, // true for white, false for black
	lightText: true, // true for white, false for black
	lightTextDesc: true, // true for white, false for black
	topLine: "This is top line",
	headLine: "This is headline",
	description: "Description text here!!",
	darkText: false, // description color: false -> black, true-> white

	//image params
	imgStart: true, // image on left or right: ;
	img: "svg-1.svg", // image path. file should be in the images folder
	alt: "Image not there", // this text will show if we are unable to find the file (if you are getting this maybe the file name is wrong or the file in not present in the images folder)

	//these are the button params
	buttonRequired: false, // need button on page or not
	buttonLabel: "Become a member!", // button text
	dark: true, // button text black or not
	primary: true, // button background: false -> black, true-> white
};

export const teamData = [
	{
		name: "Member 1",
		designation: "Designation 1",
		imgPath: "profile.svg",
	},
	{
		name: "Member 2",
		designation: "Designation 2",
		imgPath: "profile.svg",
	},
	{
		name: "Member 3",
		designation: "Designation 3",
		imgPath: "profile.svg",
	},
	{
		name: "Member 4",
		designation: "Designation 4",
		imgPath: "profile.svg",
	},
];

export const footerData = {
	logo: "logo",
	facebookLink: "https://www.google.com/",
	instaLink: "https://www.google.com/",
	twitterLink: "https://www.google.com/",
};
