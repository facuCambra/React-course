import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import {AddCategory} from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
export const GifExpertApp =() =>{

    //const categories = ['Comedia', 'Accion', 'Aventura'];
    const initialState = ['Hola'];
    const [categories, setCategories] = useState(initialState);
    /* 
    const handleAdd =() =>{
        setCategories( [ ...categories , 'Drama']);
        // setCategories( categories=> [ ...categories , 'Drama']);
    };*/
    return (
        <>
            <h2> GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />  {/*Para comunicar componentes */}
            <hr />
            {/* <button onClick={handleAdd}> Agregar </button> */}
            <ol>
                {
                    // categories.map( (categorie, index) =>{
                    //     return <li key={index}> {categorie}</li>
                    //})
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />)
                    )
                }
            </ol>

            
        </>
    );
}
