export default function Perguntas(props){
    return (
        <div className="pergunta">
                <p>Pergunta {props.index + 1}</p> <img src="./assets/imagens/seta.png" alt="abrir pergunta" />
        </div>
    )
}