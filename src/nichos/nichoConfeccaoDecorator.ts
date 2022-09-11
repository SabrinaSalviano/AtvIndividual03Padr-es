import {ProdutoDecorator} from "../produto/produtoDecorator";

export class NichoConfeccaoDecorator extends ProdutoDecorator{

    getNicho(): string {
        return this.product.getNicho() + ("Confecções");
    }

    getNome(): string {
        return this.product.getNome() + ("Camisa One Piece");
    }

    getPreco(): number {
        return this.product.getPreco() + 89.99;
    }
}