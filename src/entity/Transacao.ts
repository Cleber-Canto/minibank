import { Usuario } from "./Usuario";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Transacao" })
export class Transacao {
  constructor(valor: number, tipo: string, data: Date, usuario: Usuario) {
    this.valor = valor;
    this.tipo = tipo;
    this.data = data;
    this.usuario = usuario;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "float" })
  valor: number;

  @Column()
  tipo: string;

  @Column()
  data: Date;

  //@ManyToOne(() => Usuario)
  @ManyToOne(() => Usuario, (usuario) => usuario.transacoes)
  usuario: Usuario;
}
