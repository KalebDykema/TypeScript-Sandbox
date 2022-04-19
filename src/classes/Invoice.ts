export class Invoice {
   constructor (
      private client: string,
      readonly detail: string,
      public amount: number
   ){};

   format() {
      return `${this.client} owes ${this.amount} for ${this.detail}`;
   };
};