import { createQueryBuilder, EntityManager, getManager } from "typeorm";
import { Usuario } from "../entity/Usuario";

export class UsuarioController {
  async salvar(usuario: Usuario) {
    const usuarioSalvo = await getManager().save(usuario);
    return usuarioSalvo;
  }

  async recuperarUser(cpf: string): Promise<any> {
    let er = /^[0-9]+$/;
    let f = cpf.replace(/[^\d]+/g, "");
    let cpf2 = cpf.replace(/[^\d]+/g, "");

    if (er.test(f) && cpf2.length === 11) {
      const usuario = await getManager().findOneBy(Usuario, {
        cpf: cpf,
      });

      if (!usuario) {
        const usuario = new Usuario(cpf);
        const usuarioSalvo = await getManager().save(usuario);
        console.log(usuarioSalvo);
        return usuarioSalvo;
      }
      return usuario;
    } else {
      return { msg: "CPF invalido" };
    }
  }

  async recuperarTodos() {
    const usuarios = await getManager().find(Usuario);
    return usuarios;
  }

  async recuperarPorId(id: number): Promise<any> {
    const usuario = await getManager().findOneBy(Usuario, {
      id: id,
    });
    return usuario;
  }

  async recuperarTransacoesDoUsuario(cpfx: string) {
    console.log(cpfx);

    const usuario = await createQueryBuilder("Usuario")
      .leftJoinAndSelect("Usuario.transacoes", "Transacao")
      .select([
        "Usuario.id",
        "Usuario.cpf",
        "Transacao.id",
        "Transacao.valor",
        "Transacao.tipo",
        "Transacao.data",
      ])
      .where("Usuario.cpf = :cpf", { cpf: cpfx })
      .getOne();

    return usuario.transacoes;
  }
}
