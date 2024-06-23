import Image from "next/image";
import { Dashboard } from "./dashboard";
import { MapProvider } from "@/providers/map-provider";
import { useContext } from "react";
import { BusProvider } from "@/context/BusContext";

export default function Home() {
	const busPosition = useContext;

	return (
		<main className="">
			<BusProvider>
				<Dashboard />
			</BusProvider>
		</main>
	);
}
