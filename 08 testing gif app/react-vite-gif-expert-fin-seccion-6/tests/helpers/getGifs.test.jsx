const { getGifs } = require("../../src/helpers/getGifs");

describe('tests of getGifs helper', () => { 
    
    test('should return an array of gifs', async() => { 
        const category = 'test';
        const gifs = await getGifs(category);
        expect(gifs.length).toBeGreaterThan(0);
        expect ( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
     });

 });