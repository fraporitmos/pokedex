import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();

const  NativeStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
         //   headerShown: false
        }}
    >
      <Stack.Screen name="HomeScreen"  component={Home} 
       options={{ title: 'Pokemons' }}
      />
      <Stack.Screen name="DetailScreen" component={Detail}
       options={{ title: 'Detalle' }}

      />

    </Stack.Navigator>
  );
}

export default NativeStack