import { dataOneGovResourceClient } from "./apiClient";
import carParkVacancyMapper from "@/utils/mapper/carParkVacancyMapper";

export const fetchTdParkingVacancies = async (): Promise<CarParkVacancy[]> => {
  try {
    const parkingVacancies = await dataOneGovResourceClient.get<ParkingVacancies>("/td/carpark/vacancy_all.json");
    const carparkBasicInfo = await dataOneGovResourceClient.get<CarParkBasicInfo>("/td/carpark/basic_info_all.json");
    return carParkVacancyMapper(carparkBasicInfo.data, parkingVacancies.data);
  
  } catch (error: any) {
    console.error("Error fetching parking vacancies:", error.message);
    throw error;
  }
};


export const downloadTdParkingVacancyData = async () => {
  const data = await fetchTdParkingVacancies();
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  // Create a temporary link and trigger a download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'data.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};