import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');   
    }

    adiciona() {
        const date = new Date(this.inputData.value);
        const quantidade = Number(this.inputQuantidade.value);
        const valor = Number(this.inputValor.value);

        const negociacao = new Negociacao(
            date, 
            quantidade, 
            valor
        );
    
        console.log(negociacao);
    }
}