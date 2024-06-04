import { SanityCityRef } from "./city";
import { Coordinates } from "./coordinates";
import { Schedule } from "./schedule";

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