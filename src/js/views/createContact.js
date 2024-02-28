import React from "react";
import { Link} from "react-router-dom";
import { useContext ,useState,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const CreateContact = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
  
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
  
        const createData = {
            full_name: fullName,
            email: email,
            address: address,
            phone: phone,
           
        };
        actions.addContact(createData)
    }
  
    return (
        <div className='contactForm m-5'>
            <h1>Add Contact</h1>
            <form onSubmit={handleSubmit}>
            
                <div class="mb-3">
                   <label for="fullName" class="form-label">Full Name</label>
                   <input type="text" id="fullName" class="form-control" name="fullName" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
                </div>
                <div class="mb-3">
                   <label for="email" class="form-label">Email</label>
                   <input type="email" id="email" class="form-control" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                   <label for="address" class="form-label">Address</label>
                   <input type="text" id="address" class="form-control" name="address" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                <div class="mb-3">
                   <label for="phone" class="form-label">Phone</label>
                   <input type="text" id="phone" class="form-control" name="phone" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <button type="submit" class=" m-2 btn btn-primary">Add Contact</button>
            </form>
            <Link to="/contacts">
                <button className=" m-2 returnButton btn btn-primary">Return to contacts</button>
            </Link>
        </div>
    );
  }

