import { getUser , getUserActive} from '../base-pruebas/05-funciones';

describe(' Pruebas en 05 funciones.js' , () => {

    test(' getUser debe retornar un objeto' , () => {

        const userTest = {
            uid: 'ABC', 
            username: 'AA'
        }

        const user = getUser();

        expect(userTest).toEqual(user);

    })

    
})