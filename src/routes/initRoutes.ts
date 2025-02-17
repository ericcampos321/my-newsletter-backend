import express from "express";
import NewsletterRoutes from "./WebhookRoutes/LetterRoutes";

class InitRoutes {
   public express: express.Router

   constructor() {
      this.express = express();
      this.routes();
   }

   private routes() {
      this.express.use(NewsletterRoutes);

   }
}

export default new InitRoutes().express