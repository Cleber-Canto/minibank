import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as logger from "morgan";

import { conectarServidorNoBD } from "./config/db";
import { routerUsuario } from "./routes/usuario";
import { routerTransacao } from "./routes/transacao";

export const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger("dev"));

/**
 * Conecta no BD
 */
conectarServidorNoBD();

/**
 * Configuração de rotas
 */

//app.use("/adduser", routerUsuario);
app.use("/getuser", routerUsuario);
app.use("/", routerUsuario);
app.use("/transaction", routerTransacao);
//app.use('/', (req, res) => res.send('MiniBank Konv'));
