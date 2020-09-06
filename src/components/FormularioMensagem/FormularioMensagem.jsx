import React, { Component } from 'react';
import "./style.css";

export default class FormularioMensagem extends Component {

  constructor(props){
      super(props);
      this.titulo = "";
      this.mensagem = "";
  }

  _handleTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMensagem(evento){
    evento.stopPropagation();
    this.mensagem = evento.target.value;
  }

  _criarMensagem(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarMensagem(this.titulo, this.mensagem);
  }

  render(){
    return (
      <form className="form-mensagem " onSubmit={this._criarMensagem.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-mensagem_input"
          onChange={this._handleTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua mensagem..."
          className="form-mensagem_input"
          onChange={this._handleMensagem.bind(this)}
        />
        <button className="form-mensagem_input form-mensagem_submit">
          Salvar
        </button>
      </form>
  
    );
  }
}
