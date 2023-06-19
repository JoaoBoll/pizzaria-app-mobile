import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import {AppState} from "react-native";

function Rutes() {

    const isAuthenticated = false;
    const loading = false;

    return (
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Rutes;
