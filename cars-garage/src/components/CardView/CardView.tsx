import React, { useEffect, useState } from 'react';
import { View, Image, Button, Text } from 'react-native';

import styles from './CardViewStyles';
import logo from '../../../assets/lambo-logo.png';
import Divider from '../Divider/Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import BuyButton from '../BuyButton/BuyButton';
import { CarModel } from './props';
import { getCarData, handleNextItem, handlePreviousItem } from './actions';

const CardView = () => {
	const [carData, setCarData] = useState<CarModel | null>(null);

	useEffect(() => {
		(async () => {
			await getCarData(2, setCarData);
		})();
	}, []);

	const renderLogoBox = () => (
		<View style={styles.logoContainer}>
			<Image source={logo} style={styles.imageLogo} />
		</View>
	);

	const renderCarDetails = () => (
		<View style={{ alignItems: 'center' }}>
			<Text style={styles.cardBrand}>Lambo</Text>
			<Text style={styles.carName}>{carData?.carName}</Text>
		</View>
	);

	const renderCarImage = () => (
		<Image
			style={styles.image}
			source={{
				uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`,
			}}
		/>
	);

	const renderPriceControls = () => (
		<View style={styles.priceLabelContainer}>
			<Button
				title='<'
				color='#01a6b3'
				onPress={() => handlePreviousItem(carData, setCarData)}
			/>

			<Text style={styles.priceLabel}>{carData?.price}</Text>

			<Button
				title='>'
				color='#01a6b3'
				onPress={() => handleNextItem(carData, setCarData)}
			/>
		</View>
	);

	return (
		<View style={styles.imageContainer}>
			{renderLogoBox()}

			<Divider />

			{renderCarDetails()}

			{renderCarImage()}

			<Divider />

			{<BuyButton />}

			{renderPriceControls()}
		</View>
	);
};

export default CardView;
