import {} from 'react';
import {useNavigate} from 'react-router';

function Home(){

    const navigate = useNavigate();

    const handleLogout = () =>{
        sessionStorage.removeItem('usuarioAutenticado');
        navigate('/');
    }

    return(
        <>
        
        <div className='container'>
            <div className="contentainer-animacao">
                <div className='conteudo'>
                  <div className='logoutHome'>
                        <button className='botaologoutHome' onClick={handleLogout}>Logout</button>
                    </div>
                    <div className='tituloHome'>
                        <p className='frase'>O FUTURO DA SAÚDE<br/> É A TECNOLOGIA</p>
                    </div>
                    
                </div>
                <img src="./src/assets/animacao.png" className='imagemAnimacao' alt="" />  
            </div>
            <aside className='Home'>
                <article>
                    <div>
                        <h1 className='subtitulosHome'>Um pouco sobre a proposta!</h1>
                        <p className='textosHome'>O desperdício de medicamentos é uma questão complexa e preocupante que afeta não apenas o setor da saúde, mas também tem impactos ambientais e econômicos significativos. Este fenômeno ocorre em diferentes estágios da cadeia de suprimentos farmacêuticos, desde a produção até o consumo final pelos pacientes. O desperdício pode se manifestar de várias maneiras, como a expiração de medicamentos, descarte inadequado, armazenamento inadequado, interrupção do tratamento antes do término do medicamento e distribuição ineficiente.
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h1 className='subtitulosHome'>Sistema de gerenciamento eletrônico de registros com prescrição eletrônica</h1>
                        <p className='textosHome'>Consiste na implementação de sistemas eletrônicos de registro de pacientes e prescrições para melhor rastreabilidade e monitoramento do uso de medicamentos. Para melhor funcionamento do sistema, haverá encorajamento  a prescrição eletrônica, a qual facilita o controle de estoque e reduz erros de prescrição, garantindo que os pacientes recebam apenas a quantidade necessária de medicamentos. 
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h1 className='subtitulosHome'>Aplicativo de rastreamento de medicamentos com RFID (Identificação por Radiofrequência) e chatbots para adesão ao tratamento</h1>
                        <p className='textosHome'>Aplicativo que permite aos pacientes rastrear e gerenciar seus medicamentos, incluindo lembretes para tomar medicamentos e alertas sobre a proximidade da expiração. O qual, utilizará o  RFID para rastrear medicamentos em tempo real, desde a produção até a dispensação, melhorando a visibilidade e reduzindo perdas. Além de possuir chatbots que forneçam suporte aos pacientes, respondendo a perguntas sobre medicamentos e oferecendo lembretes para aumentar a adesão ao tratamento.
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h1 className='subtitulosHome'>Sistema de Monitoramento de Temperatura e Umidade</h1>
                        <p className='textosHome'>Utilizar sensores de temperatura e umidade conectados ao ESP32 para monitorar as condições ambientais onde os medicamentos estão armazenados. Configurando alertas para notificar quando as condições ultrapassam limites seguros para armazenamento.
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h1 className='subtitulosHome'>Inteligência Artificial (IA) para Previsão de Estoque</h1>
                        <p className='textosHome'>Utilizar algoritmos de IA para prever demandas futuras, otimizando os níveis de estoque e evitando excessos que podem levar ao desperdício.
                        </p>
                    </div>
                </article>
            </aside>
            
        </div>
    
        <h1 className='titulo'>Vantagens</h1>
        <div className='container'>
            <section className='diferenciaisHome'>
                <article>
                    <img src="./src/assets/icon3.png" className='icon' alt="" />
                    <div>
                        <h1 className='subtitulosHomeDif'>Aprimoramento da Qualidade do Atendimento</h1>
                        <p className='textosHomeDif'>Melhoria na coordenação do cuidado, resultando em um atendimento mais eficaz e centrado no paciente.
                                  Maior satisfação do paciente devido à eficiência e segurança no processo de atendimento.</p>
                        <p></p>
                    </div>
                </article>
                <article>
                    <img src="./src/assets/icon1.png" className='icon' alt="" />
                    <div>
                        <h1 className='subtitulosHomeDif'>Rastreamento Preciso de Medicamentos <br/>e Aumento da Adesão ao Tratamento</h1>
                        <p className='textosHomeDif'> O RFID permite um rastreamento preciso e em tempo real dos medicamentos desde a produção até o consumo pelo paciente.
                        <br/> Reduz a possibilidade de erros na administração, pois cada medicamento é individualmente identificado.
                         Os chatbots podem fornecer lembretes personalizados para os pacientes tomarem seus medicamentos, melhorando a adesão ao tratamento.</p>
                        <p></p>
                    </div>
                </article>
                <article>
                    <img src="./src/assets/icon2.png" alt="" className='icon' />
                    <div>
                        <h1 className='subtitulosHomeDif'>Prevenção de Perdas e Preservação</h1>
                        <p className='textosHomeDif'>Minimiza o risco de perdas financeiras devido à deterioração de produtos causada por condições inadequadas de temperatura e umidade. Além de garantit a qualidade e eficácia de produtos sensíveis à temperatura</p>
                        <p></p>
                    </div>
                </article>
                <article>
                    <img src="./src/assets/icon4.png" alt="" className='icon' />
                    <div>
                        <h1 className='subtitulosHomeDif'>Minimização de Riscos</h1>
                        <p className='textosHomeDif'>

                                Reduz o risco de estoques obsoletos ou vencidos ao ajustar dinamicamente as previsões com base em mudanças nas tendências de demanda.</p>
                        <p></p>
                    </div>
                </article>
            </section>
        </div>
        </>
    )
}
export default Home