import React from "react"
import Send from "../svg/sendgreen.svg"

function InputText(){
    return(
        <div id="div-input">
            <input id="vvod"></input>
            <button id="vvod_button"><img style={{width: "50px"}} src={Send}></img></button>
        </div>

    )
}

export default InputText