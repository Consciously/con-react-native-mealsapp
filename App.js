import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<>
			<StatusBar style='dark' />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='MealCategories' component={CategoriesScreen} />
					<Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;

const styles = StyleSheet.create({});
