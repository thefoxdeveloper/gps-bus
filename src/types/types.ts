type BusPosition = {
    lat: number;
    lng: number;
};

type BusContextType = {
    busPosition: BusPosition;
    setBusPosition: (position: BusPosition) => void;
};
type Bus = {
    id: number;
    linha: string;
    sentido: string;
    position: BusPosition;
    itsNear: boolean;
}