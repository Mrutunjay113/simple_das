import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function DataContextProvider({ children }) {
    const [userData, setUserData] = useState([]);
    console.log("user data type conetx", userData);
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}
