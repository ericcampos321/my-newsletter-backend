import express from 'express';

//Controllers
import { NewsletterController } from '../../controller/NewletterController/hooks/LetterController';

//Middlewares

class NewsletterRoutes {
   public routes: express.Router;
   constructor() {
      this.routes = express.Router();
      this.initLettersRoutes();
   }

   private initLettersRoutes() {
      const letterController = new NewsletterController()
      //Routes Letters
      this.routes.get('/webhook/newsletter', letterController.LettersController);


   }
}

export default new NewsletterRoutes().routes;
