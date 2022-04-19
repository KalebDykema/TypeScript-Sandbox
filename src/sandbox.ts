// Classes
class Invoice {
   client: string;
   detail: string;
   amount: number;

   constructor (c: string, d: string, a: number) {
      this.client = c;
      this.detail = d;
      this.amount = a;
   };

   format() {
      return `${this.client} owes ${this.amount} for ${this.detail}`;
   }
};

const invOne = new Invoice("Kaleb", "pizza", 10);
console.log(invOne.format());

// Form Selector
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Input Selectors
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// Set up form event listener
form.addEventListener("submit", (e) => {
   e.preventDefault();

   console.log(type.value);
   console.log(tofrom.value);
   console.log(details.value);
   console.log(amount.valueAsNumber);
})