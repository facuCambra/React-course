import {render, screen} from '@testing-library/react'
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs'); //create the mock 

describe('Tests of GifGrid component', () => { 
    
    const category = 'tester';

   


    test('should show loading at start', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render( <GifGrid  category = {category}  />);
        screen.debug();
        expect(screen.getByText('Cargando...'));
        expect ( screen.getByText(category));
     })

    test('should show items when useFetchGifs loads the images', () => { 
      
        const gifs = [
            {
                id: 'ABC',
                title : 'Title',
                url : 'https//google.com'
            },
            {
                id: '123',
                title: 'Second',
                url: 'https://localhost/sec.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render( <GifGrid  category = {category}  />);
        expect (screen.getAllByRole('img').length).toBe(2);
    })

 })