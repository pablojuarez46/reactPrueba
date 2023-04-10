import { useState } from "react";

export default function Welcoms(props){
    const [counter, setCounter] = useState(0);
    const {message, name } = props;
    return(
        <div>
            <p>Hola, {name}</p>
            <h1>Contador de React</h1>
            <h1> {message} </h1>
            <h2>La suma del contador es {counter}</h2>
            <button typo="submit" onClick={() => (setCounter(counter+1))}>
                Sumar contador
            </button>
        </div>    

    );
}
