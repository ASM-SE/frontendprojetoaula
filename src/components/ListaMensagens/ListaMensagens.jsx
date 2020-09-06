import React, { Component }  from 'react';
import ItensLista from '../ItensLista';
import "./style.css";

export default class ListaMensagens extends Component {

    render(){
        return (
            <ul className="lista-mensagens">
               {this.props.mensagens.map((mensagens, index) => {
                  return (
                    <li className="lista-mensagens_item" key={index}>
                        <ItensLista titulo={mensagens.titulo} mensagem={mensagens.mensagem}/>
                    </li>  
                  );
               })}
            </ul>
        );
    }

}


