import {ProdutoDecorator} from "../produto/produtoDecorator";

export class NichoAlimentoDecorator extends ProdutoDecorator{

    getNicho(): string {
        return this.product.getNicho() + ("Alimentos");
    }

    getNome(): string {
        return this.product.getNome() + ("Arroz Arboreo 1kg");
    }

    getPreco(): number {
        return this.product.getPreco() + 12.59;
    }

}