import utmTracking from "../models/ILetters";
import { eq } from "drizzle-orm";
import { db } from "../config/database";

export class NewsletterRepository {
   public async processLetterRepository(data: any) {
      try {
         let operationPromise: any;
         let rc: any;

         operationPromise = await db.insert(utmTracking).values(data);
         rc = await operationPromise;
         if (!rc) throw new Error(`Erro ao criar NewsLetter`);
         const Letter = rc;

         return ({
            status: 1,
            msg: "NewsLetter processado com sucesso",
            data: rc
         })

      } catch (err: any) {
         return (`Erro NewsLetter Repository: ${err}`)
      }
   }
}

