function carParkVacancyMapper(
    basicInfo: CarParkBasicInfo,
    vacancyInfo: ParkingVacancies
): CarParkVacancy[] {
    // Create a lookup for vacancy data by park_id
    const vacancyLookup: Record<string, CarPark> = {};
    vacancyInfo.car_park.forEach((vacancy) => {
        vacancyLookup[vacancy.park_id] = vacancy;
    });

    // Map basic info to unified structure
    return basicInfo.car_park.map((basic) => {
        const vacancy = vacancyLookup[basic.park_id]; // Get corresponding vacancy data

        return {
            park_id: basic.park_id,
            name: {
                en: basic.name_en,
                tc: basic.name_tc,
                sc: basic.name_sc
            },
            address: {
                en: basic.displayaddress_en,
                tc: basic.displayaddress_tc,
                sc: basic.displayaddress_sc
            },
            latitude: basic.latitude,
            longitude: basic.longitude,
            district: basic.district_en
                ? {
                    en: basic.district_en,
                    tc: basic.district_tc,
                    sc: basic.district_sc,
                }
                : undefined,
            contactNo: basic.contactNo || undefined,
            openingStatus: basic.opening_status?.toUpperCase() === "OPEN" ? "OPEN" : "CLOSED",
            height: basic.height || undefined,
            remark: basic.remark_en
                ? {
                    en: basic.remark_en,
                    tc: basic.remark_tc,
                    sc: basic.remark_sc
                }
                : undefined,
            website: basic.website_en
                ? {
                    en: basic.website_en,
                    tc: basic.website_tc,
                    sc: basic.website_sc
                }
                : undefined,
            carpark_photo: basic.carpark_photo || undefined,
            lastupdate: vacancy?.lastupdate || undefined,
            vehicle_types: vacancy?.vehicle_type.map((vehicleType) => ({
                type: vehicleType.type as VehicleTypeEnum,
                service_categories: vehicleType.service_category.map((category) => ({
                    category: category.category as ServiceCategoryEnum,
                    vacancy_type: category.vacancy_type as VacancyTypeEnum,
                    vacancy: category.vacancy
                }))
            })) || []
        };
    });
}

export default carParkVacancyMapper;