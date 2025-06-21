import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './BuyButtonStyles';

const BuyButton = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button}>
				<AntDesign
					name='shoppingcart'
					size={24}
					color='white'
					style={styles.icon}
				/>

				<Text style={styles.buttonText}>Buy This</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BuyButton;
