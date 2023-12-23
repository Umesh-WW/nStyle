import Image from "next/image";
import styles from "./nav.module.css";

export default function NavMenu() {
  return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<li className={styles.li}>
					<Image
						src='/vercel.svg'
						alt='Logo'
						className={styles.logo}
						width={100}
						height={24}
						priority
					/>
				</li>

				{[
					{ className: '', label: 'Home', id: 1 },
					{ className: '', label: 'About', id: 2 },
					{ className: '', label: 'Services', id: 3 },
					{ className: '', label: 'Const', id: 4 },
					{ className: '', label: 'Home', id: 5 },
					{ className: '', label: 'Home', id: 6 },
					{ className: '', label: 'Home', id: 7 },
				].map((item) => (
					<li key={item.id} className={styles.li}>
						{item.label}
					</li>
				))}
			</ul>
		</nav>
	);
}
