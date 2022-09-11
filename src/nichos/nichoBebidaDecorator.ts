import {ProdutoDecorator} from "../produto/produtoDecorator";

export class NichoBebidaDecorator extends ProdutoDecorator{

    getNicho(): string {
        return this.product.getNicho() + ("Bebidas");
    }

    getNome(): string {
        return this.product.getNome() + ("Saquê");
    }

    getPreco(): number {
        return this.product.getPreco() + 59.90;
    }

}