import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../types/RootStackParamList';
import { UserContext } from '../../contexts/userContext';
import homeScreenStyles from './HomeScreenStyles';

export type HomeScreenProps = {
	navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
	const [inputText, setInputText] = useState('');
	const userContext = useContext(UserContext);

	const navigateToUserScreen = () => {
		userContext?.setName(inputText);
		navigation.navigate('User');
	};

	return (
		<View style={homeScreenStyles.container}>
			<TextInput
				placeholder='type your name'
				value={inputText}
				onChangeText={(text) => setInputText(text)}
				style={homeScreenStyles.input}
			/>

			<Button title='login' onPress={navigateToUserScreen} />
		</View>
	);
};

export default HomeScreen;
