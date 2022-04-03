import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
	{
		modal: {
			marginTop: "50px",
			paddingTop: "25px",
			width: "400px",
			border: "1px solid white",
			borderRadius: "3px",
			overflow: "hidden",
			display: "flex",
			flexFlow: "column",
			justifyContent: "space-around",
			alignItems: "center",
			height: "190px",
		},
		modalInput: {
			padding: "2px 12px",
			width: "80px",
			height: "15px",
			marginLeft: "10px",
		},
	},
	{ name: "modal" }
);

export { useStyles };
