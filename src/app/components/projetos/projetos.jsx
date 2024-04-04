import styles from "./styles.module.css";
export default function Projetos() {
	return (
		<article id="projetos" className={styles.projetos}>
			<section className={styles.titulo}>
				<h2>PROJETOS</h2>
				<button>VER TODOS PROJETOS</button>
			</section>
			<section className={styles.container}>
				<section className={styles.containerItem}>
					<section className={styles.arrasta}>
						<img src="/jiujitsu.png" alt="" className={styles.imagem} />
						<section className={styles.tela}>
							<section className={styles.telaContainer}>
								<a
									href="https://github.com/matheus-valentim/jiu-jitsu-app"
									target="_blank"
									className={styles.telaItem1}
								>
									<img src="/github.svg" alt="" />
									<p className={styles.p}>Github</p>
								</a>
								<a
									href="https://jiu-jitsu-app.vercel.app"
									target="_blank"
									className={styles.telaItem}
								>
									<img src="/site.svg" alt="" />
									<p className={styles.p}>Website</p>
								</a>
							</section>
						</section>
					</section>
					<p className={styles.paragrafo}>App de campeonato de jiu jitsu</p>
				</section>
				<section className={styles.containerItem}>
					<section className={styles.arrasta}>
						<img src="/validade.png" alt="" className={styles.imagem} />
						<section className={styles.tela}>
							<section className={styles.telaContainer}>
								<a
									href="https://github.com/matheus-valentim/Controle-de-validade"
									target="_blank"
									className={styles.telaItem1}
								>
									<img src="/github.svg" alt="" />
									<p className={styles.p}>Github</p>
								</a>
							</section>
						</section>
					</section>
					<p className={styles.paragrafo}>Controle de validade</p>
				</section>
			</section>
			<section>
				<section className={styles.arrasta}>
					<img src="/dashboard.png" alt="" className={styles.imagem} />
					<section className={styles.telaMeio}>
						<section className={styles.telaContainer}>
							<a
								href="https://github.com/matheus-valentim/dashboard"
								target="_blank"
								className={styles.telaItem1}
							>
								<img src="/github.svg" alt="" />
								<p className={styles.p}>Github</p>
							</a>
							<a
								href="https://dashboard-ten-chi.vercel.app"
								target="_blank"
								className={styles.telaItem}
							>
								<img src="/site.svg" alt="" />
								<p className={styles.p}>Website</p>
							</a>
						</section>
					</section>
				</section>
				<p className={styles.paragrafo}>Dashboard de e-commerce</p>
			</section>
			<section className={styles.container}>
				<section className={styles.containerItem}>
					<section className={styles.arrasta}>
						<img src="/loja.png" alt="" className={styles.imagem} />
						<section className={styles.tela}>
							<section className={styles.telaContainer}>
								<a
									href="https://github.com/matheus-valentim/cms-teste"
									target="_blank"
									className={styles.telaItem1}
								>
									<img src="/github.svg" alt="" />
									<p className={styles.p}>Github</p>
								</a>
							</section>
						</section>
					</section>
					<p className={styles.paragrafo}>E-commerce roupa</p>
				</section>
				<section className={styles.containerItem}>
					<section className={styles.arrasta}>
						<img src="/breve.png" alt="" className={styles.imagem} />
						<section className={styles.tela}>
							<section className={styles.telaContainer}>
								<a className={styles.telaItem1}>
									<p className={styles.p}>EM BREVE</p>
								</a>
							</section>
						</section>
					</section>
					<p className={styles.paragrafo}>EM BREVE</p>
				</section>
			</section>
		</article>
	);
}
