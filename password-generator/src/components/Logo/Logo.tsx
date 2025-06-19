import React from 'react';
import { Text, Image } from 'react-native';

import logoStyles from './LogoStyles';
import passwordImage from '../../../assets/password-logo.jpg';

const Logo = () => {
	return (
		<>
			<Text style={logoStyles.title}>Password Generator</Text>
			<Image style={logoStyles.image} source={passwordImage} />
		</>
	);
};

export default Logo;
