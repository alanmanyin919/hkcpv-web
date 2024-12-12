import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useMapStore } from "@/store";

const InteractiveMap: React.FC = () => {
  const center = { lat: 22.308520541203517, lng: 114.22394672565642 };
  const zoom = 15;

  const carParkVacancyList = useMapStore((state) => state.carParkVacancyList);
  const setCurrentCarParkItem = useMapStore(
    (state) => state.setCurrentCarParkItem
  );
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API ?? ""}>
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultCenter={center}
        defaultZoom={zoom}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {carParkVacancyList.map((vacancy) => (
          <Marker
            key={vacancy.park_id}
            position={{ lat: vacancy.latitude, lng: vacancy.longitude }}
            onClick={() => {
              setCurrentCarParkItem();
              setTimeout(() => {
                setCurrentCarParkItem(vacancy.park_id);
              }, 200);
            }}
          />
        ))}
      </Map>
    </APIProvider>
  );
};

export default InteractiveMap;
