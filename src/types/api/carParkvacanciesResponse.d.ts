interface CarParkVacancy {
    park_id: string;
    name: LocalizedString; // Car park name in multiple languages
    address: LocalizedString; // Display address in multiple languages
    latitude: number;
    longitude: number;
    district?: LocalizedString; // District in multiple languages
    contactNo?: string; // Contact number for the car park
    openingStatus: OpeningStatus; // Operational status of the car park
    height?: number; // Height restriction in meters
    remark?: LocalizedString; // Usage rules or remarks
    website?: LocalizedString; // URLs for the car park's website
    carpark_photo?: string; // URL for car park's main entrance photo
    lastupdate?: string; // Timestamp for the last vacancy update
    vehicle_types: VehicleTypeVacancy[]; // Vacancy details by vehicle type
}

interface LocalizedString {
    en?: string;
    tc?: string;
    sc?: string;
}

interface VehicleTypeVacancy {
    type: VehicleTypeEnum; // Type of vehicle
    service_categories: ServiceCategoryVacancy[]; // Details per service category
}

interface ServiceCategoryVacancy {
    category: ServiceCategoryEnum; // Service category (HOURLY, DAILY, MONTHLY)
    vacancy_type: VacancyTypeEnum; // Type of vacancy data (A, B, C)
    vacancy: number; // Number of available spaces
}

type OpeningStatus = 'OPEN' | 'CLOSED';

