import { hover } from "@testing-library/user-event/dist/hover";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	cartBlock: {
		width: "100px",
		height: "auto",
	},
	onlyItem: {
		textDecoration: "none",
		color: "white",

		"&:hover": {
			color: "red",
		},
	},
});

export { useStyles };
