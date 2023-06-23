import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Touchable, TouchableOpacity
} from "react-native";
import {useContext, useState} from "react";

import {AuthContext} from "../../contexts/AuthContext";

export default function SignIn() {

    const {signIn} = useContext(AuthContext);

    const [email, setEmail]= useState('teste@teste.com');
    const [password, setPassword]= useState('123456');

    function handleLogin() {
        if (email === '' || password === '') {
            return;
        }

        signIn({email, password});

    }

    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>

            <View style={styles.inputContainer}>
                <TextInput  style={styles.input} placeholder="Digite seu email"
                            placeholderTextColor={"#F0F0F0"}
                            value={email}
                            onChangeText={setEmail}/>

                <TextInput style={styles.input} placeholder="Digite sua senha"
                           placeholderTextColor={"#F0F0F0"}
                           secureTextEntry={true}
                           value={password}
                           onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1d2e'
    },
    logo:{
        marginBottom: 18
    },
    inputContainer:{
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 32,
        paddingHorizontal: 14
    },
    input:{
        width: "95%",
        height: 40,
        backgroundColor: '#101026',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#fff'
    },
    button:{
        width: "95%",
        height: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 12
    },
    buttonText:{
        fontSize: 18,
        color: '#101026',
        fontWeight: 'bold'
    }
})
