import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import "./style.css";

//Concentrar as chamadas das APIs
import axios from 'axios';
const api = 'http://127.0.0.1:3003/alunos'; //subrotas .env config rotas
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export default class ListaAlunos extends Component {
    constructor(){
        super();

        this.state = {
            alunos: [],
            error: null
        }

    }

    componentDidMount(){
        this.buscarAluno();
    }



    buscarAluno(){
        axios.get(api).then( response => response.data).then(
            (result)=>{
                this.setState({
                    alunos : result
                });
            },
            (error)=>{
                this.setState({error});
            }
        )
    }

    render(){
        return(
            <section className="lista-alunos">
                <Table className="striped bordered hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Git</th>
                            <th>GRR</th>
                            <th>E-mail</th>
                            <th>Início</th>
                            <th>Conclusão</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.alunos.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.usuario_git}</td>  
                                <td>{aluno.GRR}</td>  
                                <td>{aluno.email}</td>  
                                <td>{aluno.data_inicio}</td>  
                                <td>{aluno.data_conclusao}</td> 
                                <td>
                                    <Button variant="info" onClick={() => console.log(aluno.id)}>Editar</Button>
                                    &nbsp;
                                    <Button variant="danger" onClick={() => console.log(aluno.id)}>Excluir</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </section>
        )
    }
}