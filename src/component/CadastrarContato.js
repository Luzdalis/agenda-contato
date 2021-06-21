import React, { useState } from 'react'
import axios from 'axios'
import agenda from "./img/agenda.jpg"

function CadastrarContato() {
  
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const Adicionar = () => {
    if (!nome || !email || !telefone) 
        return alert('Todos os campos são obrigatórios!')

     axios.post('http://localhost:3001/contatos', {
       nome,
       email,
       telefone
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className="Cadastro">
      <form onSubmit={() => Adicionar()}>
       <h4>Adicionar Novo Contato</h4>
        <div>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)} />
        </label>
        </div>
        <div>
        <label>
          Email:
          <input 
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
        </label>
        </div>
        <div>
        <label>
          Telefone:
          <input 
            type="text"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)} />
        </label>
        </div>
        <button className="Button" type="submit"><img src={agenda} 
          alt="Icono de adicionar contato em agenda" />Adicionar</button>
      </form>
    </div>
  )

}

export default CadastrarContato;