//import React, { Fragment } from 'react';   //imr tab importa react
import React from 'react';
import PropTypes from 'prop-types';
;


//functional components 

const PrimeraApp = ( {saludo = 'Hello', subtitulo}) => {
   

    //console.log(saludo);
    return(
  
    <>
        <h1>{saludo}</h1>
        
        <p> {subtitulo}</p>
    </>); 
}

PrimeraApp.defaultProps = {
    subtitulo: 'Sub'
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;  //exp tab es el shortcut
