import Axios from "axios";
import { configuration } from "../configurationProvider";

export interface Room {
  _id: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  details: string;
  isClicked: boolean;
  michelin_stars: number;
  name: string;
  neighborhood: string;
  photo: string;
  price: number;
  rating: number;
  review_count: number;
  serve_style: string;
}

export async function getRooms(): Promise<Room[]> {
  try {
    const url = configuration.serviceUrls.backendUrl;
    const response = await Axios.get<Room[]>(`${url}/api/rooms`);

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
