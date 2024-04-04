"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
export default function Contato() {
	const [tooltip, useTooltip] = useState(false);
	function setTooltip() {
		navigator.clipboard.writeText("matheusfigueiredo72@gmail.com");
		useTooltip(true);
		setTimeout(() => {
			useTooltip(false);
		}, 2000);
	}

	return (
		<article className={styles.container} id="contato">
			<section className={styles.bg}>
				<section className={styles.containerSubir}>
					<a href="#" className={styles.subir}>
						<img src="/setaCima.svg" alt="" className={styles.seta} />
					</a>
				</section>
				<section className={styles.wrapper}>
					<article className={styles.esquerdo}>
						<section className={styles.titulo}>
							<h2>Gostou de mim? entre em contato!</h2>
							<p>
								abaixo estão todas minhas redes e formas de entrar em contato,
								vamos trabalhar juntos!?
							</p>
						</section>
						<section className={styles.iconContainer}>
							<a
								href="https://www.linkedin.com/in/matheus-valentim-farias"
								target="_blank"
								className={styles.icon}
							>
								<img src="/linkedin.svg" width="35" height="35" alt="" />
							</a>
							<a
								href="https://github.com/matheus-valentim"
								target="_blank"
								className={styles.icon}
							>
								<img src="/github.svg" width="35" height="35" alt="" />
							</a>
							<section className={styles.icon} onClick={() => setTooltip()}>
								<img src="/email.svg" width="35" height="35" alt="" />
							</section>
						</section>
					</article>
					<aside className={styles.direito}>
						<section className={styles.titulo2}>
							<h3>GET IN TOUCH.</h3>
							<small>escaneie o QR code</small>
						</section>
						<section className={styles.qrCode}>
							<section className={styles.qrCodeContainer}>
								<img src="/QRcode.avif" alt="" />
								<small>Fale comigo acima pelo Whatsapp.</small>
							</section>
						</section>
					</aside>
				</section>
			</section>
			<section
				className={`${styles.tooltip} ${tooltip ? styles.aparecer : null}`}
			>
				<p>Email copiado com sucesso! ✅</p>
			</section>
		</article>
	);
}
