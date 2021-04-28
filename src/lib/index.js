// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const login = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);
