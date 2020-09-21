import React, { useState , useEffect} from 'react';  

function Text_Mes(props){
    const style = {
        margin:"0px"
    }
    return(
    <p style={style}>{props.text}</p>
    )
}

export default Text_Mes