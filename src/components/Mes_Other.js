import React, { useState , useEffect} from 'react';  
import Text_Mes from "./function_minor.js"
import Svg from "../svg/Mes_other_user.svg"

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
    const Name_user_style = {
        color:"grey",
        fontSize: "13px",
        float: "left",
        margin: "0px"
    }
    return(
        <div style={mes_style}>
            <p style={Name_user_style}>User</p>
            <div style={{margin: "20px",marginBottom:"0px"}}>            
                <Text_Mes text="Hello World!"/>
            </div>
            <p style={mes_time_style}>12:00</p>
        </div>
    )
}
export default MesUser