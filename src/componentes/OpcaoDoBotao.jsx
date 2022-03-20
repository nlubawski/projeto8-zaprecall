import React from "react"

export default function OpcaoDoBotao({atualizarContagem}){

    const [clicado, setClicado] = React.useState(false)
    return !clicado ? (
        <button onClick={() => {
            setClicado(!clicado)
            atualizarContagem(1)
            }
        } className="opcoes-nao-lembrei">Não Lembrei</button>
    ) : <></>
}