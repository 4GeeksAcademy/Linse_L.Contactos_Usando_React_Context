import React, { useContext , useEffect , useState } from "react";
import { Context } from "../store/appContext.js";
import Navbar from "../component/navbar.jsx";

import { Link } from "react-router-dom";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	
	const handleDeleteContact = (id) => actions.deleteContact(id);

	useEffect(() => {actions.getAgenda()},  []);

	return (
		<div className="container m-5">
			<div>
                <Link to="/"><button className="btn btn-success">Home</button></Link>
            </div>
			
			<ul className="list-group p-4">
				{store.contacts.length === 0 ? (<span>No contacts</span>) :
				store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							<div>
							<img src="https://picsum.photos/200/300" alt="Random" width="200" height="200"></img>
							</div>
							<div className="content">
							<h3>{item.full_name}</h3>	
							<p>{item.email}</p>
							<p>{item.address}</p> 
							<p>{item.phone}</p>
							</div>
							<div>
							<Link to={`/contact/edit/${item.id}`}>
								<button className="btn btn-info"> Edit </button>	
							</Link>
							<button className="btn btn-danger" onClick={() => handleDeleteContact(item.id)} > Delete </button>	
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};