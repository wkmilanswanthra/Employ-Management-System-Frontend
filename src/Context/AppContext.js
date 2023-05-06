import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    // eslint-disable-next-line no-self-compare
    const [user, setUser] = useState(null);
    const [object2, setObject2] = useState(null);
    const [object3, setObject3] = useState(null);

    useEffect(() => {
            try {
                const jwt = sessionStorage.getItem('jwt');
                const user = sessionStorage.getItem('user');
                if (jwt && user) {
                    setUser(JSON.parse(user));
                }
            } catch (e) {
                console.log(e);
            }
        }
        , []);

    const contextValue = {
        user,
        setUser,
        object2,
        setObject2,
        object3,
        setObject3,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};