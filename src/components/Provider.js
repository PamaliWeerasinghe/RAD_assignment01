import React, { createContext, useState } from 'react'

export const UseContext=createContext();

export const Parent=({children})=>{
    const [theme,setTheme]=useState('light');

    const toggleTheme=()=>{
        setTheme(prevTheme=>prevTheme==='light'?'dark':'light');

    };

    return(
        <UseContext.Provider value={{theme,toggleTheme}}>
            {children}
        </UseContext.Provider>
    );


};