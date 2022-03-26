import '@testing-library/jest-dom';
import { getSaludo } from '../base-pruebas/02-template-string';
describe('Pruebas en 02-string' , ()=>{

    test('getSaludo debe retornar hola fernando', ()=>{

            const nombre = 'Fernando';

            const saludo = getSaludo( nombre );

            expect(saludo).toBe('Hola ' + nombre);
    })
    test('getSaludo debe retornar hola carlos' , ()=>{
        const saludo = getSaludo( );

        expect(saludo).toBe('Hola Carlos');
    })
})