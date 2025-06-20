import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import { UserContext } from '../../contexts/userContext';
import userScreenStyles from './UserScreenStyles';

const UserScreen = () => {
	const userContextValue = useContext(UserContext);
	const userName = userContextValue?.name ?? 'no name was saved.';

	return (
		<View style={userScreenStyles.container}>
			<Text style={userScreenStyles.text}>Welcome, {userName}!</Text>
		</View>
	);
};

export default UserScreen;
