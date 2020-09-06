import React, { Component }  from 'react';
import "./style.css";

class ItensLista extends Component {
    render(){
        return (
            <section className="itens-lista">
                <header className="itens-lista_cabecalho">
                <h3 className="itens-lista_titulo">{this.props.titulo}</h3>
                </header>
                <p className="itens-lista_texto">{this.props.mensagem}</p>
            </section>  
        );
    }
}

export default ItensLista;

