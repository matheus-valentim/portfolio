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
						ola! sou programador web com foco em front, brinco de fazer design e
						me aventuro em backend, faço de tudo um pouco, como um pato, se eu
						faço tudo direito? me chame pra uma call.
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							dolore harum numquam fugit blanditiis voluptas quibusdam maxime
							hic fugiat consequuntur! Blanditiis nemo dignissimos perferendis
							veniam laborum, beatae amet qui vero! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Illo beatae nostrum officia
							exercitationem architecto eos veniam. Deleniti assumenda beatae
							minima accusantium reiciendis at dolore totam sint labore,
							doloremque error dignissimos. Necessitatibus architecto sapiente
							laudantium minima eius consectetur soluta dolore quos, iusto quasi
							neque corporis aut voluptas placeat ullam nihil sequi, unde fugit
							eaque nostrum adipisci qui natus deserunt! Odit, maiores! Laborum
							tempore facere est nihil eius nemo modi numquam tempora quae nisi
							aliquam minus quasi voluptatem natus veritatis libero deleniti
							reiciendis sunt, facilis exercitationem corporis ipsa vitae
							voluptatibus. Nemo, nulla. Dignissimos saepe molestiae non? Autem
							expedita, aliquam, cupiditate odit nesciunt voluptatibus rerum
							corrupti aut magni optio sunt culpa animi perspiciatis ex velit
							libero? Laudantium repellat omnis mollitia suscipit, quos
							molestias? Harum dolorum enim nulla recusandae accusamus, neque
							ullam minus veritatis labore est perspiciatis eum eligendi at
							quidem molestiae iusto expedita temporibus vel eaque facere natus
							quia fugit quos? Rem, molestiae. Rerum, laboriosam itaque quisquam
							ducimus vitae quis deserunt quasi ea harum est exercitationem!
							Temporibus, dolore commodi maiores iste dolores sit velit
							aspernatur expedita doloremque et, ex deleniti. Fugiat, aspernatur
							officiis! Quam quia perferendis, voluptatem tempora excepturi amet
							vitae facere similique facilis aliquid officia ratione laudantium
							tempore cum quo! Asperiores voluptatum laudantium harum quas vel
							placeat labore autem neque iure expedita?
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							dolore harum numquam fugit blanditiis voluptas quibusdam maxime
							hic fugiat consequuntur! Blanditiis nemo dignissimos perferendis
							veniam laborum, beatae amet qui vero! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Illo beatae nostrum officia
							exercitationem architecto eos veniam. Deleniti assumenda beatae
							minima accusantium reiciendis at dolore totam sint labore,
							doloremque error dignissimos. Necessitatibus architecto sapiente
							laudantium minima eius consectetur soluta dolore quos, iusto quasi
							neque corporis aut voluptas placeat ullam nihil sequi, unde fugit
							eaque nostrum adipisci qui natus deserunt! Odit, maiores! Laborum
							tempore facere est nihil eius nemo modi numquam tempora quae nisi
							aliquam minus quasi voluptatem natus veritatis libero deleniti
							reiciendis sunt, facilis exercitationem corporis ipsa vitae
							voluptatibus. Nemo, nulla. Dignissimos saepe molestiae non? Autem
							expedita, aliquam, cupiditate odit nesciunt voluptatibus rerum
							corrupti aut magni optio sunt culpa animi perspiciatis ex velit
							libero? Laudantium repellat omnis mollitia suscipit, quos
							molestias? Harum dolorum enim nulla recusandae accusamus, neque
							ullam minus veritatis labore est perspiciatis eum eligendi at
							quidem molestiae iusto expedita temporibus vel eaque facere natus
							quia fugit quos? Rem, molestiae. Rerum, laboriosam itaque quisquam
							ducimus vitae quis deserunt quasi ea harum est exercitationem!
							Temporibus, dolore commodi maiores iste dolores sit velit
							aspernatur expedita doloremque et, ex deleniti. Fugiat, aspernatur
							officiis! Quam quia perferendis, voluptatem tempora excepturi amet
							vitae facere similique facilis aliquid officia ratione laudantium
							tempore cum quo! Asperiores voluptatum laudantium harum quas vel
							placeat labore autem neque iure expedita?
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							dolore harum numquam fugit blanditiis voluptas quibusdam maxime
							hic fugiat consequuntur! Blanditiis nemo dignissimos perferendis
							veniam laborum, beatae amet qui vero! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Illo beatae nostrum officia
							exercitationem architecto eos veniam. Deleniti assumenda beatae
							minima accusantium reiciendis at dolore totam sint labore,
							doloremque error dignissimos. Necessitatibus architecto sapiente
							laudantium minima eius consectetur soluta dolore quos, iusto quasi
							neque corporis aut voluptas placeat ullam nihil sequi, unde fugit
							eaque nostrum adipisci qui natus deserunt! Odit, maiores! Laborum
							tempore facere est nihil eius nemo modi numquam tempora quae nisi
							aliquam minus quasi voluptatem natus veritatis libero deleniti
							reiciendis sunt, facilis exercitationem corporis ipsa vitae
							voluptatibus. Nemo, nulla. Dignissimos saepe molestiae non? Autem
							expedita, aliquam, cupiditate odit nesciunt voluptatibus rerum
							corrupti aut magni optio sunt culpa animi perspiciatis ex velit
							libero? Laudantium repellat omnis mollitia suscipit, quos
							molestias? Harum dolorum enim nulla recusandae accusamus, neque
							ullam minus veritatis labore est perspiciatis eum eligendi at
							quidem molestiae iusto expedita temporibus vel eaque facere natus
							quia fugit quos? Rem, molestiae. Rerum, laboriosam itaque quisquam
							ducimus vitae quis deserunt quasi ea harum est exercitationem!
							Temporibus, dolore commodi maiores iste dolores sit velit
							aspernatur expedita doloremque et, ex deleniti. Fugiat, aspernatur
							officiis! Quam quia perferendis, voluptatem tempora excepturi amet
							vitae facere similique facilis aliquid officia ratione laudantium
							tempore cum quo! Asperiores voluptatum laudantium harum quas vel
							placeat labore autem neque iure expedita?
						</p>
					) : null}
				</section>
			</aside>
		</article>
	);
}
