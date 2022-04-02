import { createUseStyles } from "react-jss";
import homeBg from "../../asets/homeBg.jpg";
const useStyles = createUseStyles(
	{
		logo: {
			height: "50px",
			width: "100%",
		},
		logoImg: {
			width: "100px",
			height: "auto",
		},
		logoBlock: {
			backgroundColor: "#026AA7",
			padding: "0px 25px",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
		},
		button: {
			padding: "6px 16px",
			backgroundColor: "#0a0a23",
			color: "white",
			border: "1px solid ",
			borderRadius: "5px",
		},
		homePage: {
			position: "relative",
			height: "100%",
			width: "100%",
		},
		homeImg: {
			height: "500px",
			width: "500px",
			backgroundImage: `url(${homeBg})`,
		},

		parag: {
			width: "500px",
			"& p": {
				fontSize: "18px",
				letterSpacing: "1px",
				color: "black",
			},
		},
		bgBlock: {
			marginTop: "100px",
			display: "flex",
			justifyContent: "space-around",
		},
	},
	{ name: "home" }
);

export { useStyles };
