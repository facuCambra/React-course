import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'
import { LoadingQuote } from '../03-examples/LoadingQuote';
import { Quote } from '../03-examples/Quote';

export const Layout = () => {
    
    const {counter , increment} = useCounter(1);
    let url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { data, isLoading, hasError} = useFetch(url);
  
    const {author, quote} = !!data && data[0];  //if data has elements take yhe first one 

   


    return (
        <>
            <h1>Breaking Bad Quotes</h1> 
            <hr />
            
            {
                isLoading 
                    ?  <LoadingQuote/>
                    
                    :  <Quote author={author} quote = {quote}/>
                    
            }
            

            <button 
                className='btn btn-primary' 
                onClick ={() => increment()} 
                disabled= {isLoading}
            >
                Next Quote
            </button>
        </>
    )
}
