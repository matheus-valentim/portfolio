"use client";
import styles from "./styles.module.css";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
	const [init, setInit] = useState(false);
	const [tooltip, useTooltip] = useState(false);
	function setTooltip() {
		navigator.clipboard.writeText("matheusfigueiredo72@gmail.com");
		useTooltip(true);
		setTimeout(() => {
			useTooltip(false);
		}, 2000);
	}
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options = useMemo(
		() => ({
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "grab",
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 6,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			fullScreen: {
				enable: false,
				zIndex: 0, // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
			},
			detectRetina: true,
		}),
		[]
	);

	if (init) {
		return (
			<article className={styles.hero}>
				<section className={styles.container}>
					<section>
						<h1 className={styles.h1}>
							Programador Front, Back e Arquiteto de BD
						</h1>
						<p className={styles.p}>
							Sou programador web com foco em front, brinco de fazer design e me
							aventuro em backend, faço de tudo um pouco, como um pato, se eu
							faço tudo direito? me chame pra uma call.
						</p>
					</section>
					<section className={styles.iconContainer}>
						<a
							href="https://www.linkedin.com/in/matheus-valentim-farias"
							target="_blank"
							className={styles.icon}
						>
							<img src="/linkedin.svg" alt="" />
						</a>
						<a
							href="https://wa.me/5521981819770?text=ola!%20vim%20do%20seu%20portfolio"
							target="_blank"
							className={styles.icon}
						>
							<img src="/whats.svg" alt="" />
						</a>
						<section className={styles.icon} onClick={() => setTooltip()}>
							<img src="/email.svg" alt="" />
						</section>
					</section>
				</section>
				<Particles
					id="tsparticles"
					className={styles.particles}
					options={options}
				/>
				<section
					className={`${styles.tooltip} ${tooltip ? styles.aparecer : null}`}
				>
					<p>Email copiado com sucesso! ✅</p>
				</section>
			</article>
		);
	}
}
