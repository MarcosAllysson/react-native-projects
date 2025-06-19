import { StyleSheet } from 'react-native';

const passwordButtonStyles = StyleSheet.create({
	button: {
		width: 100,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',

		elevation: 3,
		borderRadius: 5,
		marginTop: 5,
		paddingVertical: 12,
		paddingHorizontal: 32,
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: '#D5BF3C',
	},
});

export default passwordButtonStyles;
