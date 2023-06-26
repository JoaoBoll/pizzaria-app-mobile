import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";
import {FinishOrder} from "../components/FinishOrder";

export type StackParamsList = {
    Dashboard: undefined;
    Order: {
        number: string,
        order_id: string
    };
    FinishOrder: {
        number: number | string,
        order_id: string
    };
}

const Stack = createNativeStackNavigator<StackParamsList>();

function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={"Order"}
                component={Order}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={"FinishOrder"}
                component={FinishOrder}
                options={{
                    title: "Finalizando",
                    headerStyle: {
                        backgroundColor: "1d1de2",
                    },
                    headerTintColor: "#FFF"
                }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;
