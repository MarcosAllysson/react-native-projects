import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';
import UserScreen from '../screens/User/UserScreen';
import { RootStackParamList } from '../types/RootStackParamList';

import UserContextProvider from '../contexts/userContext';

// const Stack = createStackNavigator<RootStackParamList>();
// Stack.Navigator, Stack.Screen.

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StackRoutes = () => {
	return (
		<NavigationContainer>
			<UserContextProvider>
				<Navigator>
					<Screen name='Home' component={HomeScreen} />
					<Screen name='User' component={UserScreen} />
				</Navigator>
			</UserContextProvider>
		</NavigationContainer>
	);
};

export default StackRoutes;
