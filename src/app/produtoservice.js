import React from 'react';
const PRODUTOS = '_PRODUTOS'

export function ErroValidacao(error) {
    
    console.log(error);
    this.errors = error;
}


export default class ProdutoService {

    validar = (produto) => {
        const errors = [];

        if (!produto.nome) {
            errors.push("O campo nome é obrigatório");
        }
        if (!produto.sku) {
            errors.push("O campo sku é obrigatório");
        }
        if (!produto.preco) {
            errors.push("O campo preco é obrigatório");
        }
        if (!produto.fornecedor) {
            errors.push("O campo fornecedor é obrigatório");
        }

        if (errors.length > 0) {
            throw new ErroValidacao(errors);
        }
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS);
        return JSON.parse(produtos);
    }


    salvar = (produto) => {
        this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS);

        if (!produtos) {
            produtos = [];
        }
        else {
            produtos = JSON.parse(produtos);
        }
        produtos.push(produto);
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }
}