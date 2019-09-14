export class PropertyModel {
  propertyId: string;
  landlord_id: string;
  title: string;
  address: string;
  property_type: string;
  sell_type: string;
    beds: number;
    bath: number;
    area: number;
    price: number;
    currency: number;
    loadlord_name: string;
    pets_allowed: string;
    property_postDate: Date;
    property_build_year: number;
    movein_date: Date;
    landlord_image: string;
    property_image: [string];
    location: Location;
    noOfApplications: number;
    application_status: string;
    parking: number;
    utilities: string;
    laundry: string;
    description: string;
    landlord_name: string;
    email_addres: string;
}

export class Location {

  x: number;
  y: number;
  coordinates: [string];
  type: string;
  constructor(x: number, y: number, coordinates: [string], type: string) {
    this.x = x;
    this.y = y;
    this.coordinates = coordinates;
    this.type = type;
  }
}
