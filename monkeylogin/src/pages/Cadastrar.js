import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import moment from 'moment';

import './cadastrar.css';

export default function Cadastrar() {

  let {token} = useParams();
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [expiration, setExpiration] = useState()
  const [cadastrado, setCadatrado] = useState(false)

  useEffect(() => {
    buscarUsuario()
  })

  async function cadastrarUsuario(){
      await axios.post('http://localhost:8081/cadastrar/usuario', {
          nome,
          email,
          telefone
      }).then(res => {
          setCadatrado(true)
      }).catch(err => {
          setCadatrado(false)
          alert("Erro ao cadastrar usuario!")
      })
  }

  async function buscarUsuario(){
    await axios.get(`http://localhost:8080/registrar/${token}`).then(res => {
        setNome(res.data.nome);
        setEmail(res.data.email);
        setTelefone(res.data.telefone);
        setExpiration(res.data.expiration);
    })
  }

  if(moment(Date.now()).format('LTS') > moment(expiration).format('LTS')){
      return (
          <div>
              <h1>Seu cadastro expirou as {moment(expiration).format('LTS')}!</h1>
          </div>
      )
  }else{
      if(!cadastrado)
        return (
            <div>
                <p>Bem Vindo! <strong>{nome}</strong> você esta quase concluindo o cadastro em nossa base de dados, para finalizar confirme seus dados e clique em finalizar!</p>
                <ul className="dados">
                    <li>Nome: <strong>{nome}</strong></li>
                    <li>E-mail: <strong>{email}</strong></li>
                    <li>Telefone: <strong>{telefone}</strong></li>
                </ul>
                <button onClick={cadastrarUsuario}>Finalizar</button>
            </div>
        );
      else{
        return (
            <div>
                <h1>Parabéns</h1>
                <p>Seu cadastro foi efetuado com sucesso!</p>
            </div>
        )
      }
  }
}
