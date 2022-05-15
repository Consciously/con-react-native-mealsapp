import { View, Image, Text } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

const MealDetailScreen = ({ route }) => {
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	const mealDetailsProps = {
		duration: selectedMeal.duration,
		complexity: selectedMeal.complexity,
		affordability: selectedMeal.affordability
	};

	return (
		<View>
			<Image
				source={{
					uri: selectedMeal.imageUrl
				}}
			/>
			<Text>{selectedMeal.title}</Text>
			<MealDetails {...mealDetailsProps} />
			<Text>Ingredients</Text>
			{selectedMeal.ingredients.map(ingredient => (
				<Text key={ingredient}>{ingredient}</Text>
			))}
			<Text>Steps</Text>
			{selectedMeal.steps.map(step => (
				<Text key={step}>{step}</Text>
			))}
		</View>
	);
};

export default MealDetailScreen;
