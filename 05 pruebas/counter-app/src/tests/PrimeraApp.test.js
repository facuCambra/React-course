//import { render } from "@testing-library/react";
//import { render } from "react-dom";
import PrimeraApp from "../PrimeraApp";
import React from 'react';
import '@testing-library/jest-dom' //para las ayudas
import {shallow} from 'enzyme';

// import '@testing-library/jest-dom/extend-expect';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });



describe('Pruebas en PrimeraApp', ()=>{
    // test('debe mostar el mensaje "Saludos"', () => { 
        
    //     const saludoo = 'Saludos';
    //     const {getByText} = render(<PrimeraApp saludo={saludoo} />) ; //producto renderizado de mi componente
    //     expect( getByText(saludoo) ).toBeInTheDocument();
    // })

    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Buenas';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>); //permite simular varias cosas
        
        expect( wrapper).toMatchSnapshot(); //el snapshot
    
    })

    test('debe de mostarar el subtitulo enviado por props', () => { 
        const saludo = 'Saludooo';
        const subtitulo = 'Saludooo2';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text().trim();  //busca un parrafo (trim para sacar espacio al principio)
                                                      // puedo buscar por clase con punto o id #
        expect(textoParrafo).toBe(subtitulo);
     })
})
