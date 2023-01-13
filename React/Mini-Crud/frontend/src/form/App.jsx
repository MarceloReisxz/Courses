import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from '../components/Header';


const App = props => {

  function renderUsuarios() {
    const url = 'http://localhost:3001/'

    axios.get(url).then(response => {
      document.getElementsByClassName('conteudo')[0].innerHTML = ''

      const usuarios = response.data

      usuarios.forEach(e => {
        const nome = e.nome
        const idade = e.idade
        const id = e.id


        document.getElementsByClassName('conteudo')[0].insertAdjacentHTML('beforeend', `<tr><td>${nome}</td><td>${idade}</td><td><a href="http://localhost:3001/delete/${id}"><button type="submit" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
      </svg></button></a></td></tr>`)

      })
    })
  }


  return (
    <React.Fragment>

      <Header nome="Pesquisa"></Header>

      <div className='col-lg-5 col-sm-5 mx-auto mt-3 p-3'>
        <form action='/add' method='POST'>
          <div className="mb-3">
            <label for="nome" className="form-label">Nome</label>
            <input type="text" className="form-control" name="nome"></input>
          </div>
          <div className="mb-3">
            <label for="idade" className="form-label">Idade</label>
            <input type="text" className="form-control" name="idade"></input>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>

      <h2 className='mt-5 mb-2 p-2 text-center text-bg-primary'>Lista de Pesquisados</h2>

      <div className="col-8 mx-auto">
        <table className='table table-sm table-striped col-lg-2 mb-2' onLoad={renderUsuarios()}>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Idade</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <tbody className='table-group-divider conteudo'>
            {/* conteudo inserido */}

          </tbody>
        </table>
      </div>
    </React.Fragment >
  );
}


export default App