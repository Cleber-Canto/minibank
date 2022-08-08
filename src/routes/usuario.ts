import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController";
import { Usuario } from "../entity/Usuario";

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

/**
 * Serviço pra salvar um novo usuário
 */
// routerUsuario.post("/", async (req, res) => {
//   const dados = req.body;
//   const usuario = new Usuario(dados.cpf);
//   const usuarioSalvo = await usuarioCtrl.salvar(usuario);
//   res.json(usuarioSalvo);
// });

/**
 * Serviço para recuperar as transacoes de um determinado usuário
 */
routerUsuario.get("/transactions/:cpfUsuario", async (req, res) => {
  const cpfUsuario = req.params.cpfUsuario;
  const transacoes = await usuarioCtrl.recuperarTransacoesDoUsuario(cpfUsuario);
  res.json(transacoes);
});

/**
 * Serviço para pegar ou gravar ou editar usuario caso exista
 */
routerUsuario.post("/", async (req, res) => {
  const dados = req.body;
  const usuario = await usuarioCtrl.recuperarUser(dados.cpf);
  res.json(usuario);
});
