import { View, Text, StyleSheet } from 'react-native';

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subTitleContainer}>
			<Text style={styles.subTitle}>{children}</Text>
		</View>
	);
};

export default Subtitle;

const styles = StyleSheet.create({
	subTitle: {
		color: '#e2b497',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	subTitleContainer: {
		borderBottomColor: '#e2b497',
		borderBottomWidth: 2,
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4
	}
});
