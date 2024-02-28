const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				
			]
		},
		actions: {

			getAgenda: async () => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/cr7thebest");
				const jsonResponse = await response.json();
				

				setStore({ contacts: jsonResponse });
			},
			
			deleteContact: async (id)  => {
				const actions = getActions();
				await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE"
				})

				await actions.getAgenda();
			},

			editContact: async (id, contacts) => {
				const actions = getActions ();
				const editContact = {
					"full_name": contacts.full_name,
					"email": contacts.email,
					"agenda_slug": "cr7thebest",
					"address": contacts.address,
					"phone": contacts.phone
				};
				
				 await fetch (`https://playground.4geeks.com/apis/fake/contact/${id}`,{
						method: "PUT",
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify (editContact),
					});
					
					await actions.getAgenda();
					
				
			},

			addContact: async (contacts) => {
				const newContact = {
					"full_name": contacts.full_name,
					"email": contacts.email,
					"agenda_slug": "cr7thebest",
					"address": contacts.address,
					"phone": contacts.phone
				};
				
				const store = getStore();
				await fetch ("https://playground.4geeks.com/apis/fake/contact", {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify (newContact),
				});

				const actions = getActions ();
				actions.getAgenda (); 
				setStore ({contacts:[...store.contacts, newContact] });
			}
		}
	};

}
export default getState;