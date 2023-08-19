import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function DataContextProvider({ children }) {
    const [userData, setUserData] = useState([]);
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}
