import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import StackRoutes from './src/routes/index.routes';

const App = () => {
	return (
		<View style={styles.container}>
			<StackRoutes />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
