import { getManager } from "typeorm";
import { Transacao } from "../entity/Transacao";

export class TransacaoController {
  async salvar(transacao: Transacao) {
    const transacaoSalva = await getManager().save(transacao);
    return transacaoSalva;
  }
}
