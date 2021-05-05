// importamos la funcion que vamos a testear
import { login, register, crearUsuario } from '../src/lib/index';

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => {
    return null;
  },
  () => {
    return mockauth;
  }
);
mockauth.autoFlush();
global.firebase = mocksdk;

//global.firebase = firebasemock.MockFirebaseSdk(() => null, () => mockauth,);


describe('register', () => {

  test('deberia de loguearme', () => {
    const promesa = register('ben@example.com', 'examplePass');

    return promesa
      .then((user) => {
        //console.log(user);
        expect(typeof user).toBe("object");
        expect(user.email).toBe("ben@example.com")
      })

  })
});