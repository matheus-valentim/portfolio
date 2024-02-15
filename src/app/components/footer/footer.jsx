import styles from "./styles.module.css";
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>
				código por matheus e design por{" "}
				<a href="https://webflow.com/made-in-webflow/website/free-webflow-portfolio-template">
					Karina Slizova
				</a>
			</p>
		</footer>
	);
}
