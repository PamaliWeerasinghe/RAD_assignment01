import React, { useContext } from "react";
import { UseContext } from "./Provider";



export default function ChildComponent(){
    const{theme,toggleTheme}=useContext(UseContext);

    return(
        <div style={{
            padding:'20px',
            backgroundColor:theme==='light'?'#fff':'#000',
            color:theme==='light'?'#000':'#fff',
            display:'flex',
            flexDirection:'row'
        }}>
            <h2>GETYOURS. :{theme}</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}