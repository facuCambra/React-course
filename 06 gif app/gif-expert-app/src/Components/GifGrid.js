import React from 'react'
import { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import {getGifs} from './helpers/getGifs'
export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([]);


    useEffect( ()=>{
        getGifs(category)
            .then(setImages); // = a then(images=>set(images))
    }, [category])    //si la categoria cambia renderiza denuevo

    

    return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
            {
            images.map( img => (
                <GifGridItem 
                    key = {img.id}
                    {...img} //envia cada prop de img de forma independiente
                />
            ))
            // images.map( ({id, title}) => (
            //     ( <li key={id}> {title}</li> )
            // ))
            }
        
        </div>
    </>
  )
}
