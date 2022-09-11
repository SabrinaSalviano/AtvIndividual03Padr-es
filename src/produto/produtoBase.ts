import {Produto} from "./produto";

export class ProdutoBase implements Produto{

    private nome="";
    private preco= 0
    private nicho ="";

    getNicho(): string {
        return this.nicho;
    }

    getNome(): string {
        return this.nome;
    }

    getPreco(): number {
        return this.preco;
    }


}