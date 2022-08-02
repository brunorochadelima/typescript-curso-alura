import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacao } from "./models/negociacao.js";
import { NegociacoesView } from "./views/negociacoes-view.js";
const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.volume);
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adiciona();
});
const negociacaoView = new NegociacoesView("#negociacoesView");
// const template = negociacaoView.template()
// console.log(template)
