import { NewsletterRepository } from "../../../repository/NewsletterRepository";
import utmTracking from "../../../models/ILetters";

export class NewsletterService {

   public async processLetterService(data: any) {
      try {
         if (!data) {
            return { status: 0, msg: "Data params undefined or null" };
         }

         let operationPromise: any;
         let rc: any;

         const letterRepository = new NewsletterRepository();

         operationPromise = letterRepository.processLetterRepository(data);
         rc = operationPromise;

         if (!rc) {
            return { status: 0, msg: "Data params undefined or null" };
         }

         return rc;
      } catch (err: any) {
         return {
            status: err.response?.status,
            msg: 'Erro ao processar NewsLetter Webhook',
            error: err.response?.data,
         }
      }
   }
}