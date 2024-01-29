const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo :[],
			usuarios: [],



		},

		actions: {
			// Use getActions to call a function within a fuction


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
