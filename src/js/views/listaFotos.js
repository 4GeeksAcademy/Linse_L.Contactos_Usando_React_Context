import   React from "react";
import { useContext } from "react";
import ListFotos from "../component/listaFotos.jsx";
import Boton from "../component/botom.jsx";
import { Context } from "../store/appContext.js";



export default function ListaFotos(){
    const {store,actions}=useContext(Context)
    return(
        <div>
            <p><Boton/></p>
       
                        {store.usuarios.map(usuario => (  
                            <ul>
                            <ListFotos  title = {usuario.name} number = {usuario.number}  address = {usuario.address}  email = {usuario.address} />
                           
                            </ul>
                        ))}
                   

                
        <p>  </p>
        
      
        </div>
    )
}