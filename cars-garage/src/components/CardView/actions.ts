import { fetchGetCarData } from '../../apis/getCars';
import { CarModel } from './props';

export const getCarData = async (
    id: number,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    const response = await fetchGetCarData(id);

    try {
        if (response) setCarData(response);
    } catch (error) {
        console.error(`error getting data, id: ${id}`);
        setCarData(null);
    }
};

export const handlePreviousItem = async (
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    let response;

    try {
        if (carData && carData?.id > 1) {
            response = await fetchGetCarData(carData.id - 1);
        }

        if (response) {
            setCarData(response);
        }
    } catch (error) {
        console.error(`error getting previous item, id: ${carData?.id}`);
        setCarData(null);
    }
};

export const handleNextItem = async (
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    let response;

    try {
        if (carData && carData?.id < 10) {
            response = await fetchGetCarData(carData.id + 1);
        }

        if (response) {
            setCarData(response);
        }
    } catch (error) {
        console.error(`error getting next item, id: ${carData?.id}`);
        setCarData(null);
    }
};