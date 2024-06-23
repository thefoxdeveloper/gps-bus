"use client";
import { createContext, useState, type ReactNode } from "react";

export const BusContext = createContext<BusContextType | undefined>(undefined);

export const BusProvider = ({ children }: { children: ReactNode }) => {
	const [busPosition, setBusPosition] = useState<BusPosition>({
		lat: -29.3777592,
		lng: -50.8758391,
	});

	return (
		<BusContext.Provider value={{ busPosition, setBusPosition }}>
			{children}
		</BusContext.Provider>
	);
};
