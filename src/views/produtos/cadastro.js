import React from 'react';
import ProdutoService from "../../app/produtoservice";

const estadoinicial = {
    nome: '',
    sku: '',
    preco: '',
    fornecedor: '',
    descricao: '',
    sucesso: false,
    err: [],
    msgerro: false,
}

class CadastroProduto extends React.Component {

    state = estadoinicial;
    constructor() {
        super()
        this.service = new ProdutoService()
    }

    onChange = (event) => {
        const valor = event.target.value;
        const nomedocampo = event.target.name;
        this.setState({ [nomedocampo]: valor });
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor,
            descricao: this.state.descricao

        }
        try {
            this.service.salvar(produto);
            this.limpacampos();
            this.setState({ sucesso: true });
            
        } catch (e) {
            
            this.setState({
                err: e.errors,
                msgerro: true
            })
        }

    }



    limpacampos = () => {
        this.setState(estadoinicial);
    }
    fechar = () => {
        this.setState({
            sucesso: false
        })
    }

    fecharerro = () => {
        this.setState({
            msgerro: false
        })
    }


    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        Cadastro de produto:
                    </div>
                    <div className="card-body">
                        {
                            this.state.sucesso &&
                            <div className="alert alert-dismissible alert-success" onClick={this.fechar}>
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Sucesso!</strong> Cadastro realizado!
                                </div>
                        }
                        {
                            this.state.msgerro &&
                            this.state.err.map(msg => {
                                return (
                                    <div className="alert alert-dismissible alert-danger" onClick={this.fecharerro}>
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>{msg}</strong>
                                    </div>
                                )
                            })

                        }

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Nome: *</label>
                                    <input type="text" name="nome"
                                        onChange={this.onChange}
                                        className="form-control" value={this.state.nome} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>SKU: *</label>
                                    <input type="text" name="sku"
                                        onChange={this.onChange}
                                        className="form-control" value={this.state.sku} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Descrição: *</label>
                                    <textarea className="form-control" name="descricao"
                                        onChange={this.onChange}
                                        value={this.state.descricao} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Preço: *</label>
                                    <input type="text" name="preco"
                                        onChange={this.onChange}
                                        className="form-control" value={this.state.preco} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Fornecedor: *</label>
                                    <input type="text" name="fornecedor"
                                        onChange={this.onChange}
                                        className="form-control" value={this.state.fornecedor} />
                                </div>
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-md-1">
                                <div className="form-group">
                                    <button className="btn btn-success" onClick={this.onSubmit}>Salvar</button>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="form-group">
                                    <button className="btn btn-info" onClick={this.limpacampos}>Limpar</button>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="form-group">
                                    <button className="btn btn-danger">Cancelar</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

}

export default CadastroProduto;