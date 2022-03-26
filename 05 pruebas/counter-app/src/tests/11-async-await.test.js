import { getImagen } from "../base-pruebas/11-async-await";

describe('Pruebas con async-await', () => { 
    

    test('edbe retornar el url de la imagem', async() => { 
        
        const url = await getImagen();

        expect(typeof url).toBe('string');
        expect(url.includes('https://')).toBe(true);
     })
 })