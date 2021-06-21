import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ApagarContato() {
  const [lista, setLista] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/contatos')
      .then(function (response) {
        setLista(response.data)
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [lista])

  const Apagar = (id) => {
      axios.delete(`http://localhost:3001/contatos/${id}`)
      .then(function () {
        console.log('Contato apagado com sucesso!');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <ul>
        {lista.map((item) => {
          return <li key={item.id}>
            {item.nome}
            <button onClick={() => Apagar(item.id)} >Apagar</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default ApagarContato;