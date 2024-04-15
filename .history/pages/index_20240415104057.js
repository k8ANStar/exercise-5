import styles from "@/styles/Home.module.css";
import VerticalChart from "@/components/VerticalChart";
import HorizontalChart from "@/components/HorizontalChart";
import Pie

export default function Home() {
	return (
		<>
			<main className={`${styles.main} `}>
				<VerticalChart />

				<HorizontalChart />
			</main>
		</>
	);
}
