import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

    return (
        <div className="d-flex justify-content-between m-3 ">
            <div >
            <Link to="/contacts"><button className="btn btn-success">Contacts</button></Link>
            </div>
            <div>

                <Link to="/addcontact"><button className="btn btn-success">Addcontact</button></Link>
            </div>
            
           
        </div>








    )


}