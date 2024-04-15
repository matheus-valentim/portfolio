import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Portfólio",
	description:
		"Olá! Sou programador web com ênfase em front, brinco de fazer design e me aventuro em back-end, faço de tudo um pouco, como um pato. Se eu faço tudo direito? Me chame pra uma call.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
