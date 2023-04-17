import { useState } from "react";

function Titulo({ cor }){
    const [texto, setTexto] = useState("Estado inicial") //o primeiro é o valor setado inicialmente, o segundo é o componente que seta o primeiro.

    return (
        <div>
            <h1 style={{ color: cor }}>{texto}</h1>
            <button onClick={()=>{
                useState(setTexto("Mudei via botão"))
            }}>Mudar</button>
        </div>
    )
}

export default Titulo