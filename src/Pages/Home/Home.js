import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./homeStyles";
import logo from "../../asets/logo.png";
export default function Home() {
	const styles = useStyles();
	return (
		<div className={styles.homePage}>
			<div className={styles.logoBlock}>
				<div>
					<div className={styles.logo}>
						<img className={styles.logoImg} src={logo} alt="" />
					</div>
				</div>
				<div>
					<Link to="/login">
						<button className={styles.button}>Sign in</button>
					</Link>
				</div>
			</div>
			<div className={styles.bgBlock}>
				<div className={styles.parag}>
					<p className={styles.paragText}>
						Why do we use it? It is a long established fact that a reader will
						be distracted by the readable content of a page when looking at its
						layout. The point of using Lorem Ipsum is that it has a more-or-less
						normal distribution of letters, as opposed to using 'Content here,
						content here', making it look like readable English. Many desktop
						publishing packages and web page editors now use Lorem Ipsum as
						their default model text, and a search for 'lorem ipsum' will
						uncover many web sites still in their infancy. Various versions have
						evolved over the years, sometimes by accident, sometimes on purpose
						(injected humour and the like).
					</p>
				</div>
				<div className={styles.homeImg}></div>
			</div>
		</div>
	);
}
