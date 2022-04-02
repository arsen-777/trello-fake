import { createUseStyles } from "react-jss";
import trelloBg from "../../asets/trelloBg.jpg";
const useStyles = createUseStyles({
	loginBlock: {
		display: "flex",
		justifyContent: "center",
		height: "95vh",
		backgroundImage: `url(${trelloBg})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
	formBlock: {
		marginTop: "25px",
		width: "300px",
		height: "400px",
		border: "3px solid #B79A9F",
		borderRadius: "10px",
		boxShadow: "3px 3px #B79A9F, -1em 0 .8em #E0A899",
	},
	form: {
		// width: "600px",
		display: "flex",
		flexFlow: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		width: "200px",
		padding: "8px 30px",
		marginTop: "15px",
		backgroundColor: "#0a0a23",
		color: "white",
		border: "1px solid ",
		borderRadius: "5px",
	},
	input: {
		padding: "8px 30px",
		marginLeft: "10px",
		borderRadius: "6px",
	},
	label: {
		fontSize: "18px",
		fontStyle: "italic",
		padding: "15px 0px",
	},
});
export { useStyles };
