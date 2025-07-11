import { StyleSheet, View } from 'react-native';

import CameraScreen from './src/screens/CameraScreen/CameraScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<CameraScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
