import IconesInferiores from "./IconesInferiores";
import Resultado from "./Resultado";

export default function Concluidas({ contagem, icones }) {
  let auxiliar = icones.split(" ");
  auxiliar.pop()

  if (auxiliar.length === 8){
    return (
      <div className="barra-inferior-extendida">
        <Resultado auxiliar={auxiliar}/>
        <IconesInferiores contagem={contagem} auxiliar={auxiliar} css={"barra-ajustes"} />
      </div>
    )
    
  }else{

    return <IconesInferiores contagem={contagem} auxiliar={auxiliar} css={"barra-inferior"} />

  }
}

  
