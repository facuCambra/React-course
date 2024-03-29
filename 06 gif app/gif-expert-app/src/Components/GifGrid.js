import React from 'react'
import { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import {getGifs} from './helpers/getGifs'
export const GifGrid = ({category}) => {
    
    const {data:images ,loading} = useFetchGifs(category);
 
    return (
    <>
        <h3>{category}</h3>
        { loading && <p className='animate__animated animate__flash"'>Loading</p>}
        <div className='card-grid'>
            {
            images.map( img => (
                <GifGridItem 
                    key = {img.id}
                    {...img} //envia cada prop de img de forma independiente
                    // es igual a hacer title= img.title; url =img.url; 
                />
            ))
          
            }
        
        </div> 
    </>
  )
}
