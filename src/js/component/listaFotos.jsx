import React, { useContext} from "react";
import { Context } from "../store/appContext.js";
export default function ListFotos(props) {
    const {store , actions}= useContext(Context)
    return (
        <div>
             
            <div className=" border d-flex p-2 m-auto w-50 h-50 " style={{ border: "1rem" }} >

                <img src="https://pxbar.com/wp-content/uploads/2023/11/foto-de-perfil.jpg " width={150} height={150} className="card-img-left rounded-circle" />
                <div className="d-flex"> 
                <div className="  card-body ml-3">
                   
                    <h5 className="card-title">{props.title}titulo </h5>
                    <p className="card-text"> {props.numero} numero</p>
                    <p className="card-text"> {props.ubicacion} ubicacion</p>
                    <a href="#" >email</a>
                    </div>
                    <div >
                    <i className="fas fa-trash"></i>
                    </div>
                  
                </div>
                <div>
                    <ul>
                        {store.usuarios.map(usuario => (  
                            <li><strong>name:</strong> {usuario.name} <strong>email:</strong> {usuario.email} </li>
                        ))}
                    </ul>

                </div>

            </div>
        </div>
    )
}