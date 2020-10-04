import React, { useState , useEffect} from 'react';  
import Text_Mes from "./function_minor.js"
import Svg from "../svg/Mes_me.svg"

function MesUser(){
    const mes_style = {
        display: "inline-block",
        border: "15px solid transparent",
        borderImageSlice: "100 80 70 100",
        borderImageWidth: "30px 30px 30px 30px",
        borderImageOutset: "0px 0px 0px 0px",
        borderImageRepeat: "stretch stretch",
        borderImageSource: "url("+Svg+")",
    }
    const mes_time_style = {
        color:"grey",
        fontSize: "12px",
        float: "right",
        margin: "10px",
        marginRight: "5px"
    }
    return(
        <div style={mes_style}>
            <div style={{margin: "20px",marginBottom:"0px"}}>            
                <Text_Mes text="Hello World!"/>
            </div>
            <p style={mes_time_style}>12:00</p>
        </div>
    )
}
export default MesUser