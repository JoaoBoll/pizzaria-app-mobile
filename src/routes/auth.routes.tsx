import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AuthRoutes;
