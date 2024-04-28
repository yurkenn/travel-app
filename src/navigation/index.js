import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DestinationScreen from '~/screens/DestinationScreen';
import HomeScreen from '~/screens/HomeScreen';
import WelcomeScreen from '~/screens/WelcomeScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
