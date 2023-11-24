import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cadastro() {
  const [email2, setEmail] = useState('');
  const [nome2, setNome] = useState('');
  const [senha2, setSenha] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  }

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users', {
        email: email2,
        nome: nome2,
        senha: senha2,
      });

      // Exibir notificação de sucesso
      toast.success('Cadastro realizado com sucesso!');
      console.log('Cadastro realizado com sucesso!', response.data);

        // Limpar os campos do formulário
        setEmail('');
        setNome('');
        setSenha('');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      // Exibir notificação de erro
      toast.error('Erro ao cadastrar. Por favor, tente novamente.');
    }
  };

  return (
    <>
      <div className="container">
        <div className="FormularioLogin">
          <form className="FormularioLogin-form" onSubmit={handleSubmit}>
            <h1 className="TituloLogin">CADASTRO</h1>
            <div className="emailLogin">
              <label htmlFor="email2">Email:</label>
              <input type="email" id="emaillogin" placeholder="Insira seu email" value={email2} onChange={handleEmailChange} required />
            </div>
            <div className="nomeCadastro">
              <label htmlFor="nome2">Nome:</label>
              <input type="text" id="nomecadastro" placeholder="Insira seu nome" value={nome2} onChange={handleNomeChange} required />
            </div>
            <div className="senhaLogin">
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" value={senha2} onChange={handleSenhaChange} placeholder="Insira a senha" required />
            </div>

            <center><input type="submit" className="FormularioLogin-botao" value="Cadastrar" id="loginCadastro" /></center>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
          </form>
        </div>
      </div>
    </>
  )
}

export default Cadastro;
