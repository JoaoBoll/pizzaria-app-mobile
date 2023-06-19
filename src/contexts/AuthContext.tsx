import React, {useState, createContext, ReactNode} from "react";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
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
        id: "123",
        name: "teste",
        email: "teste@teste",
        token: "123123"
    });

    const isAuthenticated = !user.name;

    return (
        <AuthContext.Provider value={{user, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}
