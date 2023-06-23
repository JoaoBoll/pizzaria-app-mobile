import {Text, TouchableOpacity, View} from "react-native";
import {useContext} from "react";
import {AuthContext} from "../../contexts/AuthContext";

export default function Dashboard() {

    const {signOut} = useContext(AuthContext)

    function handleSignOut() {
        signOut();
    }

    return(
        <View>
            <Text>Tela Dashboard</Text>
            <TouchableOpacity onPress={handleSignOut}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}
