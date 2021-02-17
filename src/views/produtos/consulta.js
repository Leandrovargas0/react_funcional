import React from 'react';
import ProdutoService from "../../app/produtoservice";

class ConsultaProdutos extends React.Component {
    state = {
        produtos: []
    }

    constructor(){
        super();
        this.service = new ProdutoService();
    }

    componentDidMount() {
        const produtos = this.service.obterProdutos();
        this.setState({produtos : produtos })
    }


    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Consulta de produto:
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sku</th>
                                <th>Fornecedor</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map(produto => {
                                    return (
                                        <tr>
                                            <td>{produto.nome}</td>
                                            <td>{produto.sku}</td>
                                            <td>{produto.fornecedor}</td>
                                            <td>{produto.preco}</td>
                                            <td></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ConsultaProdutos;