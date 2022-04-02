import { createUseStyles } from "react-jss";
import boardBg from "../../asets/boardBg2.png";
const useStyles = createUseStyles(
	{
		boardBlock: {
			width: "100%",
			height: "95vh",
			backgroundImage: `url(${boardBg})`,
			backgroundSize: "cover",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexFlow: "column",
		},
		button: {
			padding: "8px 20px",
			display: "flex",
			justifyContent: "center",
			alignItems: "center ",
			fontSize: "18px",
			border: "1px solid gold",
			borderRadius: "5px",
			"& img": {
				width: "20px",
				height: "20px",
				paddingRight: "10px",
			},
		},
		// formik: {
		// 	marginTop: "25px",
		// 	width: "300px",
		// 	height: "400px",
		// 	border: "2px solid black",
		// },
		input: {
			marginTop: "25px",
			padding: "8px 16px",
			border: "2px solid",
			borderRadius: "6px",
		},
		buttonik: {
			padding: "8px 16px",
			border: "2px solid",
			borderRadius: "6px",
			marginLeft: "4px",
		},
	},
	{ name: "board" }
);

export { useStyles };
