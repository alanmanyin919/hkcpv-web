"use client";
import "@mantine/core/styles.css";
import {
  downloadTdParkingVacancyData,
  fetchTdParkingVacancies,
} from "@/services/parkingService";
import { useEffect } from "react";
import InteraciveMap from "./components/InteractiveMap";
import {
  CSSProperties as MantineCssProperties,
  MantineProvider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";
import { useMapStore } from "@/store";
import VacancyInfoDisplayDrawer from "./components/VacancyInfoDisplayDrawer";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const currentCarParkId = useMapStore(
    (state) => state.currentCarParkVacancyItem?.park_id
  );
  const setCarParkVacancyList = useMapStore(
    (state) => state.setCarParkVacancyList
  );

  useEffect(() => {
    const loadParkingData = async () => {
      try {
        const data = await fetchTdParkingVacancies();
        setCarParkVacancyList(data);
      } catch (error: any) {
        console.error(error);
      }
    };

    loadParkingData();
  }, []);

  useEffect(() => {
    if (currentCarParkId) {
      open();
    } else {
      console.log('44')
      close();
    }
  }, [currentCarParkId, open, close]);

  return (
    <MantineProvider>
      <Button onClick={downloadTdParkingVacancyData}>Download Data</Button>
      <Button onClick={open}>Open Modal</Button>
      <div id="root" style={styles.container}>
        {/* Side Menu */}
        <div id="sideMenu" style={styles.sideMenu}>
          <VacancyInfoDisplayDrawer
            isOpen={opened}
            onClose={() => {
              close();
            }}
          />
        </div>
        {/* Map */}
        <div style={styles.mapContainer}>
          <InteraciveMap />
        </div>
      </div>
    </MantineProvider>
  );
}

// Styles
const styles: { [key: string]: MantineCssProperties } = {
  container: {
    display: "flex",
    height: "100vh",
  },
  sideMenu: {
    width: "400px",
    backgroundColor: "#fff",
    borderRight: "1px solid #ddd",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    overflowY: "hidden",
    position: "relative",
    wordWrap: "break-word",
    wordBreak: "break-word",
    whiteSpace: "normal",

    // word-wrap: break-word; /* Break long words */
    // word-break: break-word; /* Break at word level */
    // white-space: normal; /* Allow wrapping */
  },
  mapContainer: {
    flex: 1,
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
};
