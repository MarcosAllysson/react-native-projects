import React from 'react';
import { View } from 'react-native';

import styles from './DividerStyles';

const Divider = () => {
	return (
		<View style={styles.dividerContainer}>
			<View style={styles.divider}></View>
		</View>
	);
};

export default Divider;
