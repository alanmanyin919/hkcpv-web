interface CarParkBasicInfo {
  car_park: CarPark[];
}

interface CarPark {
  park_id: string;
  name_en: string;
  name_tc: string;
  name_sc: string;
  displayaddress_en: string;
  displayaddress_tc: string;
  displayaddress_sc: string;
  latitude: number;
  longitude: number;
  district_en?: string;
  district_tc?: string;
  district_sc?: string;
  contactNo?: string;
  opening_status?: string;
  height?: number;
  remark_en?: string;
  remark_tc?: string;
  remark_sc?: string;
  website_en?: string;
  website_tc?: string;
  website_sc?: string;
  carpark_photo?: string;
}
