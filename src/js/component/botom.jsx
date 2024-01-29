import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useContext } from "react";
export default function Boton(){
    const {store,actions}=useContext(Context)
    return(
      
   <div>
<Link to="/form">Take me to login</Link>
  <p>usuarios existentes : {store.usuarios.length}  </p>
  </div>
    
    )
}