import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuth(true);
        } else {
            setIsAuth(false)
        }
    }, [])
    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext