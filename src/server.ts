import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
/*import initRoutes from "./routes/initRoutes";*/
import dotenv from "dotenv";
import path from "path";
import pool from "./config/database";

const envPath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envPath });

class Server {
   public express: express.Application;

   constructor() {
      this.express = express();
      this.middlewares();
      /*this.routes();*/
      this.database();
   }

   private middlewares() {
      this.express.use(express.json());
      this.express.use(cors());
      this.express.use(bodyParser.urlencoded({ extended: false }));
   }

   /*private routes() {
      this.express.use(initRoutes);
   }*/

   private async database() {
      try {
         const connection = await pool.getConnection();
         console.log(`Conectado ao MySQL (${process.env.NODE_ENV})`);
         connection.release();
      } catch (error) {
         console.error(`Erro ao conectar no MySQL`, error);
      }
   }
}

export default new Server().express;
