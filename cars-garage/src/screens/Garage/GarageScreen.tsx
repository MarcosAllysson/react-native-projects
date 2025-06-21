import React from 'react';
import styles from './GarageScreenStyles';
import { Text, View } from 'react-native';
import CardView from '../../components/CardView/CardView';

const GarageScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.cameraBox}>
				<View style={styles.triangleCorner}></View>
				<View style={[styles.triangleCorner, styles.topRight]}></View>
				<View style={[styles.triangleCorner, styles.bottomLeft]}></View>
				<View style={[styles.triangleCorner, styles.bottomRight]}></View>

				<CardView />
			</View>
		</View>
	);
};

export default GarageScreen;
