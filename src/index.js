import React from "react";
import ReactDOM from "react-dom";
import MesUser from "./components/Mes_User.js"
import MesOther from "./components/Mes_Other"
import InputText from "./components/InputText.js"

function Output(){ 
  return(
  <div>
    <InputText/>
  </div>
  )
}

ReactDOM.render(
    <Output/>,
    document.getElementById('root')
    )