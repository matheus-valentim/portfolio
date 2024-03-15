"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
export default function Sobre() {
	const [programador, setProgramador] = useState(false);
	const [designer, setDesigner] = useState(false);
	const [pato, setPato] = useState(false);
	function setaProgramador() {
		if (programador) {
			setProgramador(false);

			return;
		}
		setProgramador(true);
		setDesigner(false);
		setPato(false);
	}
	function setaDesigner() {
		if (designer) {
			setDesigner(false);

			return;
		}
		setDesigner(true);
		setProgramador(false);
		setPato(false);
	}
	function setaPato() {
		if (pato) {
			setPato(false);
			return;
		}
		setPato(true);
		setProgramador(false);
		setDesigner(false);
	}
	return (
		<article className={styles.container} id="sobre">
			<section className={styles.section}>
				<section className={styles.wrapper}>
					<h2 className={styles.h2}>Programador, Designer e Pato</h2>{" "}
					<p className={styles.p}>
						Olá! Sou programador web com ênfase em front, brinco de fazer design
						e me aventuro em back-end, faço de tudo um pouco, como um pato. Se
						eu faço tudo direito? Me chame pra uma call.
					</p>
				</section>
				<section className={styles.buttonGroup}>
					<a
						className={styles.a}
						href="https://wa.me/5521981819770?text=ola!%20vim%20do%20seu%20portfolio"
						target="_blank"
					>
						FALE COMIGO
					</a>
					<section className={styles.smallGroup}>
						<small>caso queira meu email,</small>
						<small> ele está mais pra baixo.</small>
					</section>
				</section>
			</section>
			<aside className={styles.aside}>
				<section className={styles.tela} onClick={setaProgramador}>
					<section className={styles.linha}>
						<h3 className={styles.h3}>Programador</h3>
						<Image
							src="/seta.svg"
							alt="seta para baixo"
							className={
								programador ? `${styles.seta} ${styles.setaAtivo}` : styles.seta
							}
							width="25"
							height="25"
						/>{" "}
					</section>
					{programador ? (
						<p className={styles.texto}>
							Sou programador fazem alguns anos, estou no quinto periodo da
							faculdade de ciência da computação. Tenho foco em front-end e nos
							seus principais frameworks. Trabalho com nodeJS no back-end, mesmo
							não sendo o meu foco, consigo usar se for preciso.
						</p>
					) : null}
				</section>
				<section className={styles.tela} onClick={setaDesigner}>
					<section className={styles.linha}>
						<h3 className={styles.h3}>Designer</h3>{" "}
						<Image
							src="/seta.svg"
							alt="seta para baixo"
							className={
								designer ? `${styles.seta} ${styles.setaAtivo}` : styles.seta
							}
							width="25"
							height="25"
						/>
					</section>{" "}
					{designer ? (
						<p className={styles.texto}>
							Faço prototipações no figma, a cada projeto pequeno exploro um
							lado diferente do design. Não pretendo virar um designer, mas
							quero deixar meus projetos com um toque extra, tenho confiança em
							fazer telas com animações e interações no figma, mas ainda assim,
							não sou um designer.
						</p>
					) : null}
				</section>
				<section className={styles.tela} onClick={setaPato}>
					<section className={styles.linha}>
						<h3 className={styles.h3}>Pato</h3>{" "}
						<Image
							src="/seta.svg"
							alt="seta para baixo"
							className={
								pato ? `${styles.seta} ${styles.setaAtivo}` : styles.seta
							}
							width="25"
							height="25"
						/>
					</section>
					{pato ? (
						<p className={styles.texto}>
							Trabalho com front, back, banco de dados e design, posso falar que
							seria o famoso profissional em T, mas todos usam essa
							nomenclatura. Por ser algo mais descontraido e diferente eu me
							chamo de pato, faço de tudo um pouco, mas nunca mal feito!
						</p>
					) : null}
				</section>
			</aside>
		</article>
	);
}
