export interface ServiceCategory {
    category: string; // e.g., "HOURLY"
    vacancy_type: string; // e.g., "A", "B"
    vacancy: number; // e.g., -1 or other integers
    lastupdate: string; // ISO date string
}

export interface VehicleType {
    type: string; // e.g., "P", "P_D", "M", etc.
    service_category: ServiceCategory[];
}

export interface ParkingVacancy {
    park_id: string; // Unique ID of the parking lot
    vehicle_type: VehicleType[];
}

export interface TransportDepartmentResponse {
    carPark: ParkingVacancy[];
}