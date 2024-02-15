"use client";
import { useState } from "react";
import styles from "./styles.module.css";
export default function Navbar() {
	const [hamburguer, setHamburguer] = useState(false);
	const abrirHamburguer = () => {
		hamburguer ? setHamburguer(false) : setHamburguer(true);
	};
	const fecharHamburguer = () => {
		setHamburguer(false);
	};
	return (
		<nav className={styles.navbar}>
			<article
				className={
					hamburguer ? `${styles.container} ${styles.ligado}` : styles.container
				}
			>
				<section className={styles.ponta}>
					<a className={styles.link} href="#">
						Matheus Farias
					</a>
				</section>
				<section className={styles.section}>
					<a className={styles.link} href="#sobre" onClick={fecharHamburguer}>
						Sobre
					</a>
					<a
						className={styles.link}
						href="#projetos"
						onClick={fecharHamburguer}
					>
						Projetos
					</a>
				</section>
				<section className={styles.ponta}>
					<a className={styles.link} href="#contato" onClick={fecharHamburguer}>
						Contato
					</a>
				</section>
			</article>

			<section className={styles.hamburguer} onClick={abrirHamburguer}>
				<section
					className={hamburguer ? `${styles.line} ${styles.x}` : styles.line}
				></section>
			</section>
		</nav>
	);
}
