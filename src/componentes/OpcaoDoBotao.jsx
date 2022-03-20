import React from "react"

export default function OpcaoDoBotao({atualizarContagem, classe, clicada}){

    const [clicado, setClicado] = React.useState(false)
    return !clicado ? (
        <button onClick={() => {
            setClicado(!clicado)
            atualizarContagem(1)
            clicada("errou")
            }
        } className={classe}>Não Lembrei</button>
    ) : <></>
}