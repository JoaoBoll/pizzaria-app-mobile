import React, {useState, createContext, ReactNode, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise<void>;
}

type SignInProps = {
    email: string;
    password: string;
}

type UserProps = {
    id: string,
    name: string,
    email: string,
    token: string
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>({
        id: "",
        name: "",
        email: "",
        token: ""
    });

    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(false)

    const isAuthenticated = !!user.name

    useEffect(() => {
        async function getUser() {
            const userInfo = await AsyncStorage.getItem('@sujeitopizzaria');
            let hasUser: UserProps = JSON.parse(userInfo || '{}');

            if (Object.keys(hasUser).length > 0) {
                api.defaults.headers.common['Authorization'] = 'Bearer ' + hasUser.token;

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email: hasUser.email,
                    token: hasUser.token
                })
            }
        }
    }, [])

    async function signIn({email, password} : SignInProps){

        setLoadingAuth(true);

        try {
            const response = await api.post('/session',{
                email,password
            })

            console.log(response.data)

            const {id, name, token} = response.data;

            api.defaults.headers.common['Authorization'] = 'Bearer ' + token;

            setUser({
                id: id,
                name: name,
                email: email,
                token: token
            })

            await AsyncStorage.setItem('@sujeitopizzaria', JSON.stringify(response.data));

        } catch (error) {
            console.log(error);
        }

        setLoadingAuth(false);

    }

    async function signOut() {
        AsyncStorage.setItem('@sujeitopizzaria', '{}');

        setUser({
            id: "",
            name: "",
            email: "",
            token:""
        })
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, signIn, loadingAuth, loading, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}
