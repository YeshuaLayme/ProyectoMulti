import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home'
import Add from './screens/Add';

const Stack = createNativeStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Home}/>
            <Stack.Screen name="Add" component={Add} options={{presentation: 'modal'}}/>
        </Stack.Navigator>
    )
}

export default function Navigation(props) {
    return (

        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}