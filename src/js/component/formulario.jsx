import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";



export default function Formulario() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()
    const [address, setAddres] = useState()

    const { store, actions } = useContext(Context)


    return (
        <div className="w-50 m-auto ">
        <div>
        <h1>Add new contact</h1>
        <p>numero :  {store.usuarios.length} </p>

            </div>

       
        <div >
        <form onSubmit={ ()=>actions.crearUsuario(name,email,number,address) }   > 
            <label for="Nombres" className="form-label fs-3 "><b> Full Name</b> </label>
            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" id="Nombres" placeholder="Enter Name" name="Nombres"></input>

            <label for="email" className="form-label fs-3"><b>Email address</b></label>
            <input type="email"  onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter email" name="email"></input>

            <label for="Numeros" className="form-label fs-3"><b>Numeros</b></label>
            <input type="number" onChange={(e)=>setNumber(e.target.value)}  className="form-control" id="Numeros" placeholder="Enter Numero" name="Numeros"></input>

            <label for="address" className="form-label fs-3"><b>address</b></label>
            <input type="text"  onChange={(e)=>setAddres(e.target.value)} className="form-control" id="adrres" placeholder="Enter address" name="address"></input>
            </form>
            <div>

            <button type="submit"  onClick={()=>actions.crearUsuario(name,email,number,address) } className="btn btn-primary" >Submit</button>
            </div>
            </div>
         
            <Link to="/fotos">Back to home</Link>


        </div >
    )
}