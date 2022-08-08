import "reflect-metadata"
import { DataSource } from "typeorm"
import { Transacao } from "./entity/Transacao"
import { Usuario } from "./entity/Usuario"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [Usuario, Transacao],            
    migrations: [],
    subscribers: [],    
})
