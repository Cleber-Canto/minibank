import { UsuarioController } from "../controller/UsuarioController";
import { TransacaoController } from "../controller/TransacaoController";
import { Router } from "express";
import { Transacao } from "../entity/Transacao";

export const routerTransacao = Router();
const transacaoCtrl = new TransacaoController();
const usuarioCtrl = new UsuarioController();

/**
 * Serviço para salvar uma nova transacao
 */
routerTransacao.post("/", async (req, res) => {
  const { idUsuario, valor, tipo, data } = req.body;
  const usuario = await usuarioCtrl.recuperarPorId(idUsuario);
  console.log(`usario da transacao ${usuario}`);
  console.log(usuario);
  if (usuario) {
    const transacao = new Transacao(valor, tipo, data, usuario);
    const transacaoSalva = await transacaoCtrl.salvar(transacao);
    res.json(transacaoSalva);
  } else {
    res.status(404).json({ mensagem: "Usuário da transacao não encontrado" });
  }
});
