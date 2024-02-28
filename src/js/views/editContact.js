import React from "react";
import { Link ,useParams} from "react-router-dom";
import { useContext ,useEffect , useState} from "react";
import { Context } from "../store/appContext";

export const EditContact = props => {
  const { store, actions } = useContext(Context);
  const params = useParams();
 
  const currentContact = store.contacts.find(contact => contact.id.toString() === params.contactId)
 
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
 
  useEffect(() => { 
    if (currentContact ) {
      setFullName(currentContact.full_name);
      setAddress(currentContact.address);
      setPhone(currentContact.phone);
      setEmail(currentContact.email);
    } 
  }, [currentContact]);
 
  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
 
  const handleEdit = (e) => {
    e.preventDefault();
    const editData = {
      full_name: fullName,
      address: address,
      phone: phone,
      email: email
    };
    actions.editContact(params.contactId, editData);
  };
 
  return (
    <div className='contactForm m-5'>
      <h1>Edit Contact</h1>
      <form onSubmit={handleEdit}>
        <div className="mb-3">
          <label for="fullName" className="form-label">Full Name</label>
          <input type="text" id="fullName" className="form-control" name="fullName" placeholder="Edit Name" value={fullName} onChange={handleChangeFullName} />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" name="email" placeholder="Edit Email" value={email} onChange={handleChangeEmail} />
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">Address</label>
          <input type="text" id="address" className="form-control" name="address" placeholder="Edit Address" value={address} onChange={handleChangeAddress} />
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label">Phone</label>
          <input type="text" id="phone" className="form-control" name="phone" placeholder="Edit Phone" value={phone} onChange={handleChangePhone} />
        </div>
        <button type="submit" className="btn btn-primary">Edit Contact</button>
      </form>
      <Link to="/contacts">
        <button className="returnButton btn btn-primary">Return to contacts</button>
      </Link>
    </div>
  );
 };