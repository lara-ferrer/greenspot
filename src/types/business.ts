import { Coordinates } from "./coordinates";
import { Schedule } from "./schedule";

export type Business = {
    name: string;
    url: string;
    city: string;
    address: string;
    categories: any;
    coverImage: string;
    images: string[];
    coordinates: Coordinates;
    schedule: Schedule;
}