import {ProdutoBase} from "./produto/produtoBase";
import {NichoAlimentoDecorator} from "./nichos/nichoAlimentoDecorator";
import {NichoBebidaDecorator} from "./nichos/nichoBebidaDecorator";
import {NichoConfeccaoDecorator} from "./nichos/nichoConfeccaoDecorator";
import {NichoLivroDecorator} from "./nichos/nichoLivroDecorator";

const produtoBase = new ProdutoBase();
const nichoAlimento = new NichoAlimentoDecorator(produtoBase);
const nichoBebida = new NichoBebidaDecorator(produtoBase);
const nichoConfeccao = new NichoConfeccaoDecorator(produtoBase);
const nichoLivro = new NichoLivroDecorator(produtoBase);


console.log(nichoAlimento.getNicho(), nichoAlimento. getNome(), nichoAlimento.getPreco());
console.log(nichoBebida.getNicho(), nichoBebida.getNome(), nichoBebida.getPreco());
console.log(nichoConfeccao.getNicho(), nichoConfeccao.getNome(), nichoConfeccao.getPreco());
console.log(nichoLivro.getNicho(), nichoLivro.getNome(), nichoLivro.getPreco());