import CounterApp from "../CounterApp";
import React from 'react';
import '@testing-library/jest-dom' //para las ayudas
import {shallow} from 'enzyme';


describe ('Pruebas en CounterApp', ()=>{
    const value=100;
    let wrapper = shallow(<CounterApp value={value}/>);

    beforeEach( () => {
            wrapper = shallow(<CounterApp value={value}/>);
        }
    );


    test('Checkeo renderizado de CounterApp', () => { 
        //const value=10;
      //  const wrapper = shallow(<CounterApp value={value}/>); //permite simular varias cosas
        
        expect( wrapper).toMatchSnapshot(); //el snapshot
     })

     test('Valor por defecto sea 100', () => { 
       // const value=100;
        //const wrapper = shallow(<CounterApp value={value}/>); //permite simular varias cosas
        
        const defaultValue= wrapper.find('h2').text().trim();

        expect(defaultValue).toBe('100');
     })

     test('debe incrementar contador al hacer click en +1', ()=>{

       wrapper.find('button').at(0).simulate('click'); //primer boton
       const counterText = wrapper.find('h2').text().trim();
       expect(counterText).toBe('101');
     })

     test('debe dencrementar contador al hacer click en --', ()=>{

        wrapper.find('button').at(2).simulate('click'); //primer boton
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('99');  
      })

      test('Debe setear el valor x defecto al darle a reset', () => { 
          
        wrapper.find('button').at(2).simulate('click'); 
        wrapper.find('button').at(2).simulate('click'); 
        
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(value.toString());

       })

})