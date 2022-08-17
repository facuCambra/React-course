import { render,screen,fireEvent } from '@testing-library/react'
import { AddCategory } from '../../src/components'

describe('tests of <AddCategory /> tests ', () => { 
    
    test('should change the value of the text box', () => { 
        
        render( <AddCategory onNewCategory={() => {}}/>)
        const inputValue = 'Testing input'
        const input = screen.getByRole('textbox');
        fireEvent.input( input , {target : {value : inputValue}}) //the second argument is the event that the component recives
        expect(input.value).toBe(inputValue)
        //screen.debug();
    })

    test('should call onNewCategory if input have a value', () => { 
        
        const inputValue = 'Form input';
        const onNewCategory = jest.fn(); //mock function to test the behaviour of the component
        render( <AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input , {target : {value : inputValue}}); //the second argument is the event that the component recives
        fireEvent.submit(form);
        expect( input.value ).toBe('');
        expect( onNewCategory).toHaveBeenCalledTimes(1);
        //screen.debug();

    })

    test('should call onNewCategory with the correct value', () => { 
        const inputValue = 'Form input';
        const onNewCategory = jest.fn(); //mock function to test the behaviour of the component
        render( <AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input , {target : {value : inputValue}}); //the second argument is the event that the component recives
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledWith( inputValue);
    })

    test('should not call onNewCategory if input is empty', () => { 
        
        const inputValue = '';
        const onNewCategory = jest.fn(); //mock function to test the behaviour of the component
        render( <AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input , {target : {value : inputValue}}); //the second argument is the event that the component recives
        fireEvent.submit(form);
        expect( onNewCategory).toHaveBeenCalledTimes(0);
        //screen.debug();

    })
 })