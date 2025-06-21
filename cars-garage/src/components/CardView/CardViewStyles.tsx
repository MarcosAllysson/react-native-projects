import { StyleSheet } from 'react-native';

const cardViewStyles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		borderRadius: 8,
	},
	logoContainer: {
		alignContent: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 200,
		resizeMode: 'contain',
	},
	imageLogo: {
		flex: 1,
		width: '65%',
		resizeMode: 'contain',
	},
	cardBrand: {
		color: 'white',
		fontWeight: 400,
		fontSize: 18,
		fontStyle: 'italic',
	},
	carName: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	image: {
		flex: 1,
		marginBottom: 10,
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	priceLabelContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingBottom: 10,
		alignItems: 'center',
		marginTop: 10,
	},
	priceLabel: {
		color: 'white',
		fontSize: 22,
	},
});

export default cardViewStyles;
