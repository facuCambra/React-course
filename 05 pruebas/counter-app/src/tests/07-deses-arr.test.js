import { retornaArreglo} from '../base-pruebas/07-deses-arr'
describe('Pruebas desestructuracion', () => {
    test('debe retornar un string y un numero', ()=>{

        //const arr = retornaArreglo();

        const [letras, numeros] = retornaArreglo();
        expect(typeof letras).toBe( 'string');
        expect(typeof numeros).toBe( 'number');
    })
})

