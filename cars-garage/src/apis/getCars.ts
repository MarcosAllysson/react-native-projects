import axios from 'axios';

import { CarModel } from '../components/CardView/props';
import { CAR_API_BASE_URL } from '../constants/car';

interface ApiResponse {
    cars: CarModel[];
}

export const fetchGetCarData = async (
    id: number,
) => {
    try {
        const response = await axios.get<ApiResponse>(CAR_API_BASE_URL);
        const carData = response.data.cars.find((car) => car.id === id) || null;

        return carData;
    } catch (error) {
        console.error('error getting cars data from api.');

    }
};