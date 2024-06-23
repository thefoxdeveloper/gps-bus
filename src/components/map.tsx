"use client";

import { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import userIconSrc from "../assets/bus-stop-location-icon.svg";
import busIconSrc from "../assets/bus-stop-3.png";
import Image from "next/image";

// Map's styling
export const defaultMapContainerStyle = {
	width: "100%",
	height: "83vh",
	borderRadius: "15px 0px 0px 15px",
};

const defaultMapZoom = 16;
const defaultMapOptions = {
	zoomControl: true,
	tilt: 0,
	gestureHandling: "auto",
	mapTypeId: "roadmap",
};

const busPosition2 = {
	lat: -29.37256459995537,
	lng: -51.10654790783524,
};

const MapComponent = ({ lat, lng }: { lat: number; lng: number }) => {
	const [userLocation, setUserLocation] = useState({
		lat: -29.3777592,
		lng: -50.8758391,
	});

	const busPosition = {
		lat: lat,
		lng: lng,
	};

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setUserLocation({ lat: latitude, lng: longitude });
				},
				(error) => {
					console.error("Error getting user location:", error);

					setUserLocation({ lat: -29.3777592, lng: -50.8758391 });
				},
			);
		} else {
			setUserLocation({ lat: -29.3777592, lng: -50.8758391 });
		}
	}, []);

	return (
		<div className="w-full">
			<GoogleMap
				mapContainerStyle={defaultMapContainerStyle}
				center={userLocation}
				zoom={defaultMapZoom}
				options={defaultMapOptions}
			>
				<Marker position={userLocation} icon={userIconSrc} />
				<Marker position={busPosition}>
					<Image src={busIconSrc} alt="Bus Icon" width={50} height={50} />
				</Marker>
			</GoogleMap>
		</div>
	);
};

export { MapComponent };
