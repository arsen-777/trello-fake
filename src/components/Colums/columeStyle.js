import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	column: {
		display: "flex",
		overflow: "hidden",
		flexDirection: "column",
		alignItems: "center",
		minHeight: "400px",
		width: "400px",
		justifyContent: "space-around",
		border: "3px solid #E0A899",
		borderRadius: "6px",
		margin: "15px 25px",
		boxShadow: "-5px -5px 30px 5px #E0A899, 5px 5px 30px 5px #E0A899",
		"& input ": {
			border: "2px solid ",
			borderRadius: "6px",
			padding: "6px 14px",
			margin: "0 4px",
		},
		"& button": {
			padding: "6px 14px",
			backgroundColor: "#0a0a23",
			color: "white",
			border: "1px solid ",
			borderRadius: "5px",
		},
		"& select": {
			padding: "5px 16px",
			border: "2px solid ",
			borderRadius: "6px",
			margin: "0 4px",
		},
		"& span": {
			fontStyle: "italic",
			fontSize: "18px",
		},
	},
	txtArea: {
		display: "flex",
		alignItems: "center",
		"& textarea": {
			border: "2px solid ",
			borderRadius: "6px",
		},
	},
});

export { useStyles };
