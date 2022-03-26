
describe('pruebas en demo', () => { //para agrupar 

    test('should not be equal', () => { 

        const msg = 'Hello world!';
        const msg2 = 'Bye world!';
    
        expect(msg).not.toBe(msg2);
    } )
})


