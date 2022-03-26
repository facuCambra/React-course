import { getHeroeByIdAsync } from "../base-pruebas/09-promesas"
import heroes from "../data/heroes";

describe('Pruebas con promesas', () => { 
    
    test('Debe retornar un heroe de forma asincrona', (done) => { 
        
        const id =1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                
                expect(heroe).toBe(heroes[0]);
                //expect(heroe).toBe(heroes[1]); //con este tira q esta mal 
                done(); //para q termine la prueba asincrona
        });
     });

     //es igual a:
     test('getHeroesByIdAsync debe retornar un héroe async', ()  => {
        const id = 1;
        return expect(getHeroeByIdAsync(id)).resolves.toBe(heroes[0]);
    });
    
    //  test('Debe retornar un error si el heroe no existe', ()=>{
    //     const id =10;
    //     getHeroeByIdAsync(id)
    //         .catch(error => {
                
    //             return expect(error).reject.toMatch('No se pudo encontrar el héroe');
    //              //para q termine la prueba asincrona
    //     });
        test('debe de obtener un error si el heroe por id no existe', () => {
            const id = 10;
            return expect(getHeroeByIdAsync(id)).rejects.toMatch('No se pudo encontrar el héroe');
        });
     
 })