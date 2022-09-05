import React from 'react'
import { useCallback } from "react";


export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    const incrementarNumero = useCallback(

        //incrementar(numero)
    )

    


    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
}
)