import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './Style';
import Logo from '../../components/Logo/Logo';
import PasswordButton from '../../components/PasswordButton/PasswordButton';

const Home = () => {
	return (
		<View style={styles.appContainer}>
			<View style={styles.logoContainer}>
				<Logo />
			</View>

			<View style={styles.inputContainer}>
				<PasswordButton />
			</View>

			<StatusBar style='light' />
		</View>
	);
};

export default Home;
