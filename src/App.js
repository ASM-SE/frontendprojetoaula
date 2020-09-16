import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Alunos from "./components/Alunos";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/App.css";
import './assets/index.css';
import ListaAlunos from './components/ListaAlunos';
import Professores from './components/Professores';
import Instituicao from './components/Instituicao';

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

      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/instituicao'} className="nav-link">Intituição</Link></li>
            <li><Link to={'/professores'} className="nav-link">Professores</Link></li>
          </ul>
        </nav>
        <Switch>
          {/**Como passo propos entre rotas? 
           * 
           * <Alunos criarAluno = {this.criarAluno.bind(this)} aluno={this.state.aluno}/>
              <ListaAlunos />
          */}
          <Route path="/" exact component={Professores} />
          <Route path="/professores" exact component={Professores} />
          <Route path="/instituicao" exact component={Instituicao} />
        </Switch>
        
      </Router>



    );
  }
}

