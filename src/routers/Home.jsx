import {  } from 'react'


function Home() {
 

  return (
    <>
      
      <div className='container'>
        <section className='conteudo-home'>
            <div className='conteudo-home-imagem'>
            <p className='titulo-home'>O FUTURO DA SAÚDE <span className="texto-escrito"></span><span className="cursor">&nbsp;</span></p>
                <p className='titulo-home'> É A TECNOLOGIA<span className="texto-escrito"></span><span className="cursor">&nbsp;</span></p>
            </div>
            <h2 className='titulo-home-texto'>Um pouco sobre a proposta!</h2>
            <div className='conteudo-home-texto'>
                <p className='texto-home'>O desperdício de medicamentos é uma questão complexa e preocupante que afeta não apenas o setor da saúde, mas também tem impactos ambientais e econômicos significativos. Este fenômeno ocorre em diferentes estágios da cadeia de suprimentos farmacêuticos, desde a produção até o consumo final pelos pacientes. O desperdício pode se manifestar de várias maneiras, como a expiração de medicamentos, descarte inadequado, armazenamento inadequado, interrupção do tratamento antes do término do medicamento e distribuição ineficiente. Conheça os nosso projetos para solucionar o impasse.</p>
            </div>
            <div className='botoes'>
                <a href="./Projetos"><button className='botaoHome' id="botaoNossosProjetos">Projetos</button></a>
            </div>
        </section>
      </div>
        
    </>
  )
}

export default Home