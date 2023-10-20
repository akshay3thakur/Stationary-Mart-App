import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayScreen from './screens/PlayScreen';
import InsertScreen from './screens/InsertScreen';
import ViewProductsScreen from './screens/ViewProductsScreen';
import HelpCenterScreen from './screens/HelpCenterScreen'; 

export default function App() {

  const Stack = createNativeStackNavigator();

  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Play'>
      <Stack.Screen name="Play" component={PlayScreen} options={{title: "My Home"}}/>
      <Stack.Screen name="Insert" component={InsertScreen} />   
      <Stack.Screen name="View" component={ViewProductsScreen} />
      <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

