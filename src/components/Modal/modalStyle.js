import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
	{
		modal: {
			width: "400px",
			height: "500px",
			border: "3px solid rgb(25, 24, 22)",
		},
	},
	{ name: "modal" }
);

export { useStyles };
