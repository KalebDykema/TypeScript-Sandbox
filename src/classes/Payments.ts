import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter{
   constructor (
      readonly recipient: string,
      private detail: string,
      public amount: number
   ){};

   format() {
      return `${this.recipient} owes ${this.amount} for ${this.detail}`;
   };
};