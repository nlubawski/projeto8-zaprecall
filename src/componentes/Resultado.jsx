import Sad from "./../assets/imagens/sad.png"
import Party from "./../assets/imagens/party.png"

export default function Resultado({auxiliar}){

    function errados(item){
        return item === "errou"
    }

    let erros = auxiliar.filter(errados).length
    console.log(auxiliar)

    if (erros > 0){
        return (
            <div className="resultado">
            <div className="titulo">
            <img src={Sad} alt="ganhou"/>
            <h1>Putz!</h1>
            </div>
            <p>Ainda faltam alguns... Mas não desanime!</p>
        </div>
        )
}else{
        return (
                <div className="resultado">
                <div className="titulo">
                <img src={Party} alt="ganhou"/>
                <h1>Parabéns!</h1>
                </div>
                <p>Você não esqueceu de nenhum flashcard!</p>
        
            </div>
            
            )
    }

    
}