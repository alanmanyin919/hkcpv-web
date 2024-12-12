import { create } from 'zustand'


interface MapStore {
    carParkVacancyList: CarParkVacancy[],
    currentCarParkVacancyItem: CarParkVacancy | undefined,
    setCarParkVacancyList: (nextData: CarParkVacancy[]) => void,
    setCurrentCarParkItem: (nextId?: string) => void,
}

const useMapStore = create<MapStore>(
    (set) => {
        return {
            setCarParkVacancyList: (nextCarparkVacancyList: CarParkVacancy[]) => {
                set((state) => ({
                    ...state,
                    carParkVacancyList: nextCarparkVacancyList,
                }))
            },
            setCurrentCarParkItem: (nextSelectedCarParkId?: string) => {
                console.log("setCurrentCarParkItem::nextSelectedCarParkId", nextSelectedCarParkId);
                set((state) => {
                    const currentCarParkVacancyItem = nextSelectedCarParkId ? state.carParkVacancyList.find((item) => item.park_id === nextSelectedCarParkId) : undefined;
                    console.log("setCurrentCarParkItem::currentCarParkVacancyItem", currentCarParkVacancyItem);
                    return {
                        ...state,
                        currentCarParkVacancyItem
                    }
                })
            },
            carParkVacancyList: [],
            currentCarParkVacancyItem: undefined,
        }
    }
);

export { useMapStore };
