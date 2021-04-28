// importamos la funcion que vamos a testear
import { login } from '../src/lib/index';

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
  it('debe loguear', () => {

  })
});
