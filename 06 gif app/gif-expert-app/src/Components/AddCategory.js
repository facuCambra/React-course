import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ( {setCategories} )=> { //para 
  
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const  handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length >2){

          setCategories( categories => [inputValue,...categories] );   //uso el set del useState q recibo x parametro
                                                                     // categories es el estado del useState
          setInputValue('');
        }
        
    }
    return (
    //   <>
      <form onSubmit={handleSubmit}>   {/* para cuando hago enter en un input  */ }
      {/* <h1>{inputValue}</h1> */}
        <input  
            type="text"
            value={inputValue}
            onChange ={ handleInputChange }
        />
      </form>
    /* </> */
    
  )

}

AddCategory.propTypes={
  setCategories : PropTypes.func.isRequired
}


