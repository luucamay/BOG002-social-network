// importamos la funcion que vamos a testear
import { login } from '../src/lib/index';
const { mockFirebase } = require('firestore-jest-mock');

// Create a fake Firestore with a `users` and `posts` collection
mockFirebase({
  database: {
    users: [
      { id: 'abc123', name: 'Homer Simpson' },
      { id: 'abc456', name: 'Lisa Simpson' },
    ],
    posts: [{ id: '123abc', title: 'Really cool title' }],
  },
});

global.firebase = require("firebase")
//console.log(firebase);

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
  it('debe loguear', () => {
    return login("aaaa", "bbbb").then(console.log)
  })
});
