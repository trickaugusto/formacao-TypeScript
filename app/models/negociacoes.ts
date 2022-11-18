import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
    // private negociacoes: Negociacao[] = []; /// igual a linha de cima

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    // OU PODE USAR:

    // lista(): readonly Negociacao[] {
    //     return this.negociacoes;
    // }
}