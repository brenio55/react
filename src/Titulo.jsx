import { useState } from "react";

function Titulo({ cor }){
    const [texto, setTexto] = useState("Estado inicial") //o primeiro é o valor setado inicialmente, o segundo é o componente que seta o primeiro.
    const [inputText, setInputText] = useState("")

    function clicou(){
        setTexto(inputText);
    }

    return (
        <div>
            <h1 style={{ color: cor }}>{texto}</h1>
            <input value={inputText} onChange={
                (e)=>{setInputText(e.target.value)}
            } type="text" />
            <button onClick={clicou}>Mudar</button>
        </div>
    )
}

export default Titulo