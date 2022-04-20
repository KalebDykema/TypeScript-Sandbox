import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("Kaleb", "pizza", 10);
const invTwo = new Invoice("Crowe", "chicken", 5);

const invoices: Invoice[] = [invOne, invTwo];
invoices.forEach(inv => {
   console.log(inv.client, inv.format());
})

interface IsPerson {
   name: string;
   age: number;
   speak(a: string): void;
   spend(a: number): number;
};

const me: IsPerson = {
   name: "Kaleb",
   age: 23,
   speak (text) {
      console.log(text);
   },
   spend (amount) {
      console.log("I spent", amount);
      return amount;
   }
}

const greetPerson = (person: IsPerson) => {
   console.log("Hello", person.name);
}

greetPerson(me);

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