import {} from 'react'
import '../App.scss'
import { NavLink } from 'react-router-dom'


function Nav() {
  return (
    <>
    <div className='container'>
        <div className='NavBarLogin'>
            <NavLink to='Login' className='Item-NavL' id='Item-NavL'>Login</NavLink>
            <NavLink to='Cadastro' className='Item-NavL' id='Item-NavL'>Cadastro</NavLink>
        </div>

        <div className='NavBar'>
            <img className='NavBar-logo' src="./src/assets/logo.png" alt="" />
            <nav className='NavBar-item'>
                <NavLink to='Home' className='Item-Nav' id='Item-Nav'>Home</NavLink>
                <NavLink to='Projetos' className='Item-Nav' id='Item-Nav'>Projetos</NavLink>
            </nav>
            
        </div>
   </div>   
    </>
  )
}

export default Nav