import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

function Registro() {

    const URL = "http://localhost:8080/registrar/usuario" 

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [data, setData] = useState([])
    const [redirect, setRedirect] = useState(false)

    async function Registrar(){
        await axios.post(URL, {
        nome,
        email,
        telefone
        }).then(res => {          
          setData(res.data)
          setRedirect(true)
        })
    }

    if(redirect){
      return <Redirect to={{pathname:"/cadastrar", state:data}} />
    }else{
      return (
        <div>
            <h1 className="titulo">Crie sua conta</h1>
          <form className="formulario">
            <div className="div">
              <label className="label">Nome</label>
              <input className="input" type="text" value={nome} onChange={ evt => setNome(evt.target.value)}/>
            </div>
            <div className="div">
              <label className="label">E-mail</label>
              <input className="input" type="text" value={email} onChange={ evt => setEmail(evt.target.value)}/>
            </div>
            <div className="div">
              <label className="label">Telefone</label>
              <input className="input" type="text" value={telefone} onChange={ evt => setTelefone(evt.target.value)}/>
            </div>
          </form>
          <button className="btn" onClick={Registrar}>Registrar</button>
        </div>
      );
    }
  
}


export default Registro