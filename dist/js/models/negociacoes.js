export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        // OU PODE USAR:
        // lista(): readonly Negociacao[] {
        //     return this.negociacoes;
        // }
    }
    // private negociacoes: Negociacao[] = []; /// igual a linha de cima
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
