import {} from 'react'

function Projetos() {
    return (
      <>
      <div className='container'>
      <section className='conteudo-projetos'>

        <h2 className='titulo-projetos'>Sistema de gerenciamento eletrônico de registros com prescrição eletrônica</h2>
        <div className='conteudo-projetos-texto'>
          <p className='texto-projetos'>Consiste na implementação de sistemas eletrônicos de registro de pacientes e prescrições para melhor rastreabilidade e monitoramento do uso de medicamentos. Para melhor funcionamento do sistema, haverá encorajamento  a prescrição eletrônica, a qual facilita o controle de estoque e reduz erros de prescrição, garantindo que os pacientes recebam apenas a quantidade necessária de medicamentos.</p>
        </div>
       
        <h2 className='titulo-projetos'>Aplicativo de rastreamento de medicamentos com RFID (Identificação por Radiofrequência) e chatbots para adesão ao tratamento</h2>
        <div className='conteudo-projetos-texto'>
          <p className='texto-projetos'>Aplicativo que permite aos pacientes rastrear e gerenciar seus medicamentos, incluindo lembretes para tomar medicamentos e alertas sobre a proximidade da expiração. O qual, utilizará o  RFID para rastrear medicamentos em tempo real, desde a produção até a dispensação, melhorando a visibilidade e reduzindo perdas. Além de possuir chatbots que forneçam suporte aos pacientes, respondendo a perguntas sobre medicamentos e oferecendo lembretes para aumentar a adesão ao tratamento.</p>
        </div>

        <h2 className='titulo-projetos'>Sistema de Monitoramento de Temperatura e Umidade</h2>
        <div className='conteudo-projetos-texto'>
          <p className='texto-projetos'>Utilizar sensores de temperatura e umidade conectados ao ESP32 para monitorar as condições ambientais onde os medicamentos estão armazenados. Configurando alertas para notificar quando as condições ultrapassam limites seguros para armazenamento.</p>
        </div>

        <h2 className='titulo-projetos'>Inteligência Artificial (IA) para Previsão de Estoque</h2>
        <div className='conteudo-projetos-texto'>
          <p className='texto-projetos'>Utilizar algoritmos de IA para prever demandas futuras, otimizando os níveis de estoque e evitando excessos que podem levar ao desperdício.</p>
        </div>
      
      </section>
     </div>
      </>
    )
  }
  
  export default Projetos