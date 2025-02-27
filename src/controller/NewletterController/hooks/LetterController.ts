import { Request, Response } from 'express';
import { NewsletterService } from '../../../service/NewletterService/hooks/LetterService';

export class NewsletterController {
   async LettersController(req: Request, res: Response): Promise<void> {
      try {
         const data = req.body;

         const newsletterService = new NewsletterService();
         

         const execute = await newsletterService.processLetterService(data);
         res.status(200).json(execute);
      } catch (err: any) {
         res.status(500).json(err);
      }
   }
}