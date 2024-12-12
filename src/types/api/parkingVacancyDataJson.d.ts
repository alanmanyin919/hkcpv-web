interface ParkingVacancies {
  car_park: CarPark[];
}

interface CarPark {
  park_id: string;
  lastupdate: string; // ISO 8601 format: YYYY-MM-DDTHH:MM:SS+0800
  vehicle_type: VehicleType[];
}

interface VehicleType {
  type: VehicleTypeEnum;
  service_category: ServiceCategory[];
}

type VehicleTypeEnum = 'P' | 'M' | 'L' | 'H' | 'C' | 'T';

interface ServiceCategory {
  category: ServiceCategoryEnum;
  vacancy_type: VacancyTypeEnum;
  vacancy: number;
}

type ServiceCategoryEnum = 'HOURLY' | 'DAILY' | 'MONTHLY';

type VacancyTypeEnum = 'A' | 'B' | 'C';
