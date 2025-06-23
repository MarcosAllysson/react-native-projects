import { StyleSheet } from 'react-native';

const cameraScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	message: {
		textAlign: 'center',
		paddingBottom: 10,
	},
	camera: {
		flex: 1,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'transparent',
		margin: '30%',
	},
	button: {
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
	},
	takePhoto: {
		position: 'absolute',
		bottom: 20,
		right: 20,
	},
	takePhotoText: {
		fontSize: 20,
		color: '#fff',
		marginBottom: 15,
	},
});

export default cameraScreenStyles;
