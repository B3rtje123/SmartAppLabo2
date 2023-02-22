//TODO: gbruik de stack navigator uit de docs
//toon een home screen
//voeg een button toe om naar de detail te gaan
//toon de detail screen (nog leeg)
//Voeg een button toe om terug te gaan naar de home screen
//bekijk hoe je de header kan namaken zoals het voorbeeld

import { createStackNavigator } from '@react-navigation/stack';
import Detail from './Detail';
import Home from './Home';

const Stack = createStackNavigator();

function LabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
export default LabStack;
//TODO: hoe lang ga je hiermee bezig zijn....? (hopelijk minder lang dan 1 uur)