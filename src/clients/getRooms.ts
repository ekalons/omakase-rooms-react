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
    const response = await Axios.get<Room[]>(
      `${configuration.serviceUrls.backendUrl}/rooms`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
