// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const login = (email, password) => {

  return firebase.auth()
    .signInWithEmailAndPassword(email, password);
}


export const register = (email, password) => {
  return firebase.auth()
    .createUserWithEmailAndPassword(email, password);
}



// ----------------------------FUNCION ELIMINAR POST---------------------------->
export const deletePost = (uid) => {
  return firebase.firestore()
    .collection('publicaciones').doc(uid).delete();
}

// ----------------------------FUNCION AGREGAR DATOS POST--------------------------->

export const addPostsData = (user, textPublication) => {
  return firebase.firestore().collection('publicaciones').add({
    date: new Date().toLocaleString(),
    text: textPublication.value,
    uid: user.uid
  })
}
