import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import {ActivityIndicator, AppState, View} from "react-native";
import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";

function Rutes() {

    const {isAuthenticated} = useContext(AuthContext);

    const loading = false;

    if (loading) {
        return (
            <View style={{flex: 1,
                backgroundColor: '#f5f7fb',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size={60} color={"#FFF"}/>
            </View>
        )
    }

    return (
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Rutes;

