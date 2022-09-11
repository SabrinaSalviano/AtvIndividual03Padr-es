import { Produto } from './produto';

export class ProdutoDecorator implements Produto {

    constructor(protected product: Produto){}

    getNome(): string {
        return this.product.getNome();
    }

    getPreco(): number {
        return this.product.getPreco();
    }

    getNicho(): string {
        return this.product.getNicho();
    }

}
