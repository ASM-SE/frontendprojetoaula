import React, { Component } from 'react';
import axios from 'axios';
import Alunos from "./components/Alunos";
import "./assets/App.css";
import './assets/index.css';

const api = 'http://127.0.0.1:3003/alunos'; //subrotas .env config rotas
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      aluno:{}
    };
  }

  criarAluno(aluno){
    this.setState(aluno);
    axios.post(api, aluno).then( result => {
      alert(result.res);
      //this.setState({aluno}) - retorna o aluno com id
    });
  };

  render(){
    return (
      <section className="conteudo"> 
        <Alunos criarAluno = {this.criarAluno.bind(this)} aluno={this.state.aluno}/>
      </section>
    );
  }
}

