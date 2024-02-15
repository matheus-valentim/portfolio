import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Sobre from "./components/sobre/sobre";
import Projetos from "./components/projetos/projetos";
import Contato from "./components/contato/contato";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";

export default function Home() {
	return (
		<main className={styles.main}>
			<Navbar />
			<section className={styles.centro}>
				<Hero />
				<Sobre />
				<Projetos />
			</section>
			<section className={styles.contato}>
				<Contato />
			</section>
			<Footer />
		</main>
	);
}
