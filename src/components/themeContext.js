import React ,{createContext,useState} from 'react';
import Color from "./Color";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {

    const [theme,setTheme] = useState(Color[0]);
    
    const toggler = () =>{
        if(theme === Color[0] )
            setTheme(Color[1])
        else 
            setTheme(Color[0])
    }

    return(
        <ThemeContext.Provider value = {{theme,setTheme,toggler}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

