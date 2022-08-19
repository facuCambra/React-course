import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {
    
    const {counter, increment, decrement, reset} = useCounter(5);
  
    return (
    <> 
        <h1> Counter with Hook: {counter} </h1>
        <hr />
        <button onClick={ () => increment(10) } className='btn btn-primary' > +1 </button>
        <button className='btn btn-primary' onClick={ reset }> Reset </button>
        <button className='btn btn-primary' onClick={ () => decrement() }> -1 </button>

    </>
  )
}
