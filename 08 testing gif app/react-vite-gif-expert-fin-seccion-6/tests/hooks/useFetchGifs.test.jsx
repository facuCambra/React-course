const { useFetchGifs } = require("../../src/hooks/useFetchGifs")
import {renderHook, waitFor} from '@testing-library/react'

describe('tests of useFetchGifs hook', () => { 
    
    test('should return the initial state', () => { 
        const category = 'Testing'
        const {result } = renderHook ( () => useFetchGifs(category));
        const { images , isLoading} = result.current;
        expect ( images.length).toBe(0);
        expect (isLoading ).toBeTruthy();

    
    })

    test('should return an array of images and isLoading in false', async() => { 
        
        const category = 'Testing'
        const {result } = renderHook ( () => useFetchGifs(category));
        
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        );

        const { images , isLoading} = result.current;

        expect ( images.length).toBeGreaterThan(0);
        expect (isLoading ).toBeFalsy();
     })
})