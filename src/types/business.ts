import { Coordinates } from "./coordinates";

export type Business = {
    name: string;
    url: string;
    address: string;
    categories: any;
    coverImage: string;
    coordinates: Coordinates;
}