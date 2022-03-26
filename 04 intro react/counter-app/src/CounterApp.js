import React , {useState} from 'react';
import PropTypes from 'prop-types';



const CounterApp = ({value=10}) => {
    
    const [counter, setCounter ] = useState(0);

    console.log(counter); // retorna un valor y una funcion


    const handleAdd = (e)=>{
        setCounter( counter+1 );
        //setCounter( (c) => c + 1 ); es igual
    }
    const handleReset = ()=>{
        setCounter( value );
    }
    const handleOne =()=>{
        setCounter( counter-1 );
    }
    return(
        <>
            <h1> CounterApp</h1>
            <h2> {counter}</h2>
            <button onClick={ (e)=> {handleAdd(e)} }>++</button> 
            <button onClick={ ()=> {handleReset()}}> Reset </button>
            <button onClick={ ()=> {handleOne()}}> -1 </button>
            
        </>
    )   //<button onClick={ ()=> {setCounter(counter-1)}}> -1 </button>
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

// racf shortcut

/* Es lo mismo que hacer
    const handleAdd = (e)=>{
        console.log(e);
    }
    return(
        <>
            <h1> CounterApp</h1>
            <h2> {value}</h2>
            <button onClick={ handleAdd }>++</button>  <----
        </>
    )   //e es el evento click
    */