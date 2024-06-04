import { SanityCityRef } from "./city.types";
import { Coordinates } from "./coordinates.types";
import { Schedule } from "./schedule.types";

export type Business = {
    _id: string;
    name: string;
    url: string;
    city: SanityCityRef;
    address: string;
    website: string;
    phoneNumber: string;
    category: string;
    subcategories: Array<string>;
    coverImage: string;
    images: string[];
    coordinates: Coordinates;
    schedule: Schedule;
    reviews: Array<any>
}