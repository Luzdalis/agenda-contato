// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function CadastrarContato(props) {
  
//   const [nome, setNome] = useState('')
//   const [email, setEmail] = useState('')
//   const [telefone, setTelefone] = useState('')

//   useEffect(() => {
//       BuscarContato()
//   }, [])

//   const Adicionar = () => {
//     if (!nome || !email || !telefone) 
//         return alert('Todos os campos são obrigatórios!')

//     const data = {
//        nome,
//        email,
//        telefone
//     }

//     let url= "http://localhost:3001/contatos"
//     let metodo= "POST"

//     if(props.id){
//         url= `${url}/${props.id}`
//         metodo = 'PUT'
//     }
//   }

//     const BuscarContato = () => {
//     if(!props.id){
//         return
//     }
//     axios(`http://localhost:3001/contatos/${props.id}`)
//         .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
// }

//   return (
//     <>
//       <form onSubmit={() => Adicionar()}>
//         <label>
//           Nome:
//           <input
//             type="text"
//             value={nome}
//             onChange={(event) => setNome(event.target.value)} />
//         </label>

//         <label>
//           Email:
//           <input 
//             type="text"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)} />
//         </label>

//         <label>
//           Telefone:
//           <input 
//             type="text"
//             value={telefone}
//             onChange={(event) => setTelefone(event.target.value)} />
//         </label>


//         <button type="submit">Adicionar</button>
//       </form>
//     </>
//   )

// }

// export default CadastrarContato;