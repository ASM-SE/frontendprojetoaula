import React, { Component } from 'react';
import "./style.css";

export default class Alunos extends Component {
  //remover auto complete do form
  constructor(props){
      super(props);

      this.initialState = {
        nome : '',
        usuario_git : '',
        GRR : '',
        email : '',
        data_inicio : '',
        data_conclusao : ''
      }

      if(props.aluno.id){
        this.state = props.aluno;
      } else {
        this.state = this.initialState;
      }

      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);

  }

  _handleChange(evento){
    const name = evento.target.name;
    const value = evento.target.value;

    this.setState({
      [name]: value
    })

  }

  _handleSubmit(evento){

    evento.preventDefault();
    evento.stopPropagation();
    console.log(this.state);
    this.props.criarAluno(this.state);
    this.setState(this.initialState);

  }


  render(){
    return (
      <form className="form-mensagem " onSubmit={this._handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          className="form-mensagem_input"
          name="nome"
          value={this.state.nome}
          onChange={this._handleChange}
        />
        <input
          type="text"
          placeholder="Git"
          className="form-mensagem_input"
          name="usuario_git"
          value={this.state.usuario_git}
          onChange={this._handleChange}
        />
        <input
          type="text"
          placeholder="GRR"
          className="form-mensagem_input"
          name="GRR"
          value={this.state.GRR}
          onChange={this._handleChange}
        />
        <input
          type="text"
          placeholder="E-mail"
          className="form-mensagem_input"
          name="email"
          value={this.state.email}
          onChange={this._handleChange}
        />
        <input
          type="text"
          placeholder="Data de Início"
          className="form-mensagem_input"
          name="data_inicio"
          value={this.state.data_inicio}
          onChange={this._handleChange}
        />
        <input
          type="text"
          placeholder="Data de Conclusão"
          className="form-mensagem_input"
          name="data_conclusao"
          value={this.state.data_conclusao}
          onChange={this._handleChange}
        />                               

        <button className="form-mensagem_input form-mensagem_submit">
          Salvar
        </button>
      </form>
  
    );
  }
}
