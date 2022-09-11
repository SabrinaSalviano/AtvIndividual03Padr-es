import {ProdutoDecorator} from "../produto/produtoDecorator";


export class NichoLivroDecorator extends ProdutoDecorator{

    getNicho(): string {
        return this.product.getNicho() + ("Livros");
    }

    getNome(): string {
        return this.product.getNome() + ("Coraline");
    }

    getPreco(): number {
        return this.product.getPreco() + 49.99;
    }
}
