import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const cliente = new Cliente("Maison",98225723287)
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente ("Ricardo", 5000,123456789001);
gerente.cadastrarSenha("123");

const estaLogado = SistemaAutenticacao.login(diretor,"123456");

SistemaAutenticacao.login(gerente,"98225723287");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");



const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456");
console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);






