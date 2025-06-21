import { StyleSheet } from 'react-native';

const buyButtonStyles = StyleSheet.create({
	container: {
		backgroundColor: '#01a6b3',
		padding: 10,
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 8,
	},
	button: {
		flexDirection: 'row',
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		fontStyle: 'italic',
	},
	icon: {
		marginRight: 10,
	},
});

export default buyButtonStyles;
