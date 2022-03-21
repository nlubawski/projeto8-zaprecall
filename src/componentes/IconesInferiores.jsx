export default function IconesInferiores({ contagem, auxiliar,css }) {
  return (
    <section className={css}>
        <div className="contagem">
          {contagem}/8 Concluidas  
        </div>
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
                <ion-icon name="help-circle"></ion-icon>
              </div>
            );
          } else if (item === "zap") {
            return (
              <div key={index} className="icone-zap">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
