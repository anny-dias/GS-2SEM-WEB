import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormularioLogin() {
  const [email1, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: {
          email: email1,
          senha: senha,
        },
      });
  
      const user = response.data.find((user) => user.email === email1 && user.senha === senha);
  
      if (user) {
        // Limpar os campos do formulário
        setEmail('');
        setSenha('');
        toast.success('Login bem-sucedido!');
        console.log('Login bem-sucedido!', user);
        // Redirecionar o usuário ou executar lógica desejada
      } else {
        toast.error('Credenciais inválidas. Verifique seu email e senha.');
        console.log('Credenciais inválidas!');
      }
    } catch (error) {
      toast.error('Erro ao fazer login. Tente novamente mais tarde.');
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <>
      <div className='container'>
        <div className="FormularioLogin">
          <form className="FormularioLogin-form" onSubmit={handleSubmit}>
            <h1 className="TituloLogin">LOGIN</h1>
            <div className="emailLogin">
              <label htmlFor="email1">Email:</label>
              <input type="email" id="emaillogin" placeholder="Insira seu email" value={email1} onChange={handleEmailChange} required />
            </div>
            <div className="senhaLogin">
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" value={senha} onChange={handleSenhaChange} placeholder="Insira a senha" required />
            </div>
            <p className="FormularioLogin-p">Esqueceu a senha? <a className="FormularioLogin-a" href="#">Clique aqui!</a></p>

            <center><input className="FormularioLogin-botao" type="submit" value="Enviar" id='loginCadastro' required/></center>

          </form>
        </div>

        <p className="legenda-formulario">Não possui cadastro? <a href="Cadastro">Cadastre-se clicando aqui!</a></p>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default FormularioLogin;
