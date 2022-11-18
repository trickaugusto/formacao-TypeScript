export class Negociacao {
    // não preciso declarar propriedade se eu coloco dessa forma no construtor que recebe parâmetros:
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // Não preciso de getters se eu declarar como readonly, assim não é possível alterar
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
