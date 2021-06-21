import React, { useEffect, useState } from 'react'
import axios from 'axios'
import deletar from "./img/deletar.jpg"
import editar from "./img/editar.jpg"

function ListarContato() {
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

  if (!lista.length)
  return <div className="ListaVazia">Lista de contatos vazia</div>

  const Apagar = (id) => {
    axios.delete(`http://localhost:3001/contatos/${id}`)
      .then(function () {
        console.log('Contato apagado com sucesso!');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const Atualizar = (id) => {
    // axios.delete(`http://localhost:3001/contatos/${id}`)
    //   .then(function () {
    //     console.log('Contato apagado com sucesso!');
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  return (
    <div className="ListarContato">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="coluna">ID</th>
              <th className="coluna">NOME</th>
              <th className="coluna">E-MAIL</th>
              <th className="coluna">TELEFONE</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="coluna">{item.id}</td>
                  <td className="coluna">{item.nome}</td>
                  <td className="coluna">{item.email}</td>
                  <td className="coluna">{item.telefone}</td>
                  <td className="coluna"><button className="Button" onClick={() => Atualizar(item.id)} ><img src={editar} 
                     alt="Icono de editar" />Editar</button></td>
                  <td className="coluna"><button className="Button" onClick={() => Apagar(item.id)} ><img src={deletar} 
                     alt="Icono de deletar" />Apagar</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarContato;
