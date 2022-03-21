export default function Concluidas({ contagem, icones }) {
  let auxiliar = icones.split(" ");
  auxiliar.pop()

  return (
    <section className="barra-inferior">
      {contagem}/8 Concluidas
      <div className="barra-inferior-icones">
        {auxiliar.map((item, index) => {
          if (item === "errou") {
            return (
              <div key={index} className="icone-errou">
                <ion-icon name="close-circle"></ion-icon>
              </div>
            );
          } else if (item === "quase") {
            return (
              <div key={index} className="icone-quase">
                <ion-icon  name="help-circle"></ion-icon>
              </div>
            );
          } else if (item === "zap") {
            return (
              <div key={index} className="icone-zap">
                <ion-icon  name="checkmark-circle"></ion-icon>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
