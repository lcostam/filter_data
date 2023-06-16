import { useState } from 'react';
import './App.css';
import JSONDATA from './datas.json';

function App() {
  const [search, setSearch] = useState('')
  return (
    <>
      <div class="header">
        <h1>FILTER DATA</h1>
      </div>
  
      <div class="container">
        <form class="pure-form pure-form-stacked form">
          <fieldset>
            <legend>Formulário </legend>
            <label for="texto">Texto:</label>
            <input type="text" id="texto" placeholder="Digite um texto" onChange={(event) => setSearch(event.target.value)}/>
          </fieldset>
        </form>
        
        <table class="pure-table table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody id="tabela-corpo">
            {JSONDATA.filter((val) =>{
              if (search==""){
                return val
              }else if(val.first_name.toLowerCase().includes(search.toLowerCase()) || val.last_name.toLowerCase().includes(search.toLowerCase()) || val.email.toLowerCase().includes(search.toLowerCase())){
                return val
              }
            }).map((val, key) => {
              return  <tr>
                        <th>{val.first_name} {val.last_name}</th>
                        <th>{val.email}</th>
                      </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
