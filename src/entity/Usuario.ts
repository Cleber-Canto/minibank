import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Transacao } from "./Transacao";

@Entity()
export class Usuario {
  constructor(cpf: string) {
    this.cpf = cpf;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf: string;

  @OneToMany(() => Transacao, (transacao) => transacao.usuario)
  transacoes: Transacao[];
}
