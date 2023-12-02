import { Coordinates } from "./coordinates";
import { Schedule } from "./schedule";

export type Business = {
    name: string;
    url: string;
    address: string;
    categories: any;
    coverImage: string;
    coordinates: Coordinates;
    schedule: Schedule;
}