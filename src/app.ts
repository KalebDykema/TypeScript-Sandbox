import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// Form Selector
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Input Selectors
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// List Interface Instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

// Set up form event listener
form.addEventListener("submit", (e) => {
   e.preventDefault();

   let doc: HasFormatter;

   if (type.value === "Invoice") {
      doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
   }
   else {
      doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
   }

   list.render(doc, type.value, "end");
})

// Generics: <T> captures whatever item we pass into the function and the properties on it so the "type" is valid.

// This only accepts any type essentially
// const addUID = <T> (obj: T) => {

// This accepts any object
// const addUID = <T extends object> (obj: T) => {

// This accepts an object as long as it has a name property on it
const addUID = <T extends { name: string }> (obj: T) => {
   const uid = Math.floor(Math.random() * 100);
   return { ...obj, uid };
}

const docOne = addUID({ name: "Kaleb", age: 23 });

// This won't work as long as we extend object on the generic
// const docTwo = addUID("Test");

// Without a generic up above, it would say that "age" and "name" do not exist.
console.log(docOne.age);


// Generics are very useful with interfaces
interface Resource<T> {
   uid: number,
   resourceName: string,
   data: T
};

const docThree: Resource<object> = {
   uid: 1,
   resourceName: "test",
   data: {
      name: "Kaleb",
      age: 23
   }
};

// Without a generic up above
console.log(docThree.data.age);