import {} from 'react'
import Nav from './components/Nav'
import Home from './routers/Home'
import Projetos from './routers/Projetos'
import Login from './routers/Login'
import Cadastro from './routers/Cadastro'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

 

 

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Projetos' element={<Projetos />} />
      <Route path='/Login' element={<Login />}/>
      <Route path='/Cadastro' element={<Cadastro />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}


export default App