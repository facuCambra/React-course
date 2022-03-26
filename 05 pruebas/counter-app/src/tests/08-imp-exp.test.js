import { getHeroeById , getHeroesByOwner } from "../base-pruebas/08-imp-exp";
import heroes from "../data/heroes"
describe( 'Pruebas en funciones de heroes', ()=> {   

    test('debe reotrnar un hereoe por id', () => { 
        const id =1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id===id);  //devuelve al heroe h con id = id
        
        expect(heroe).toEqual(heroeData);
    })

    test('debe reotrnar undefined en hereoe sin id valida', () => { 
        const id =10;
        const heroe = getHeroeById(id);
                
        expect(heroe).toBe(undefined);
    })


    test('debe retornar un arreglo con los heroes de DC', ()=>{
        const owner = 'DC';
        const heroesDcValidacion = heroes.filter((heroe) => heroe.owner === owner)
        const heroesDc = getHeroesByOwner(owner);
        expect(heroesDc).toEqual(heroesDcValidacion);
    })

    test('debe retornar un arreglo con los heroes de Marvel largo 2', ()=>{
        const owner = 'Marvel';
        const heroesDcValidacion = heroes.filter((heroe) => heroe.owner === owner)
        const heroesDc = getHeroesByOwner(owner);
        expect(heroesDc).toEqual(heroesDcValidacion);
        expect(heroesDc.length).toBe(2);
    })

})


