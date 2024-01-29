const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo :[],
			usuarios: [],



		},

		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: ()=> {

				fetch('https://playground.4geeks.com/apis/fake/todos/user/alesanchezr', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Will be true if the response is successful
        console.log(resp.status); // The status code=200 or code=400 etc.
        console.log(resp.text()); // Will try to return the exact result as a string
        return resp.json(); // (returns promise) Will try to parse the result as JSON and return a promise that you can .then for results
    })
    .then(data => {
        // Here is where your code should start after the fetch finishes
        console.log(data); // This will print on the console the exact object received from the server
    })
    .catch(error => {
        // Error handling
        console.log(error);
    });






			},







			




			crearUsuario: (name, email, number, address) => {
				const store = getStore();
				let nuevoUsuario = {
					name: name,
					email: email,
					number: number,
					address: address

				}
				let nuevaListaUsuarios = [...store.usuarios, nuevoUsuario]
				setStore({ usuarios: nuevaListaUsuarios });
				console.log("intenado")

			 }



		}
	};
};

export default getState;
