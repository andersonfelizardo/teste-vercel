import { useState } from 'react';

function Home() {
    //return <h1>Página Inicial</h1>
    return( 
        <div>Home
            <h1>Clique para testar o contador!</h1>
            <Contador/>
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

/*<CapsLock texto="Me deixe em Caps Lock por favor"/>
function CapsLock(props){
    const textoInserido = props.texto
    const textoEmCapsLock = textoInserido.toUpperCase()
    return <div>{textoEmCapsLock}</div>
}*/
export default Home