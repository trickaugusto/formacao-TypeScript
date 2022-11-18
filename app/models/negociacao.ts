export class Negociacao {

    // não preciso declarar propriedade se eu coloco dessa forma no construtor que recebe parâmetros:
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}
    // Não preciso de getters se eu declarar como readonly, assim não é possível alterar

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());

        return data;
    }
}