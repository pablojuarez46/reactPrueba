import { useState } from "react";

//estoy en la rama main2

export default function Welcoms(props){
    const [counter, setCounter] = useState(0);
    const [semaforo, setSemaforo] = useState(false);
    const {message, name } = props;

    const contar = () => {
        //console.log();
        setCounter(counter+1);
        setSemaforo(!semaforo);
    };

    //prueba
    console.log(semaforo);

    return(
        <div>
            <p>Hola, {name}</p>
            <h1>Contador de React</h1>
            <h1> {message} </h1>
            <h2>La suma del contador es {counter}</h2>
            <h1>El color de semaforo es : {semaforo ? 'red' : 'green'}</h1>
            <button typo="submit" onClick={contar} >
                Sumar contador
            </button>
        </div>    
<<<<<<< HEAD

        //quiero seguir jugando

=======
    //prueba de React y Git
>>>>>>> pruebaReact
    );
}
