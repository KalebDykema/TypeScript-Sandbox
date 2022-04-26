import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
// Form Selector
const form = document.querySelector(".new-item-form");
// Input Selectors
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// List Interface Instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
// Set up form event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "Invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// Generics: <T> captures whatever item we pass into the function and the properties on it so the "type" is valid.
// This only accepts any type essentially
// const addUID = <T> (obj: T) => {
// This accepts any object
// const addUID = <T extends object> (obj: T) => {
// This accepts an object as long as it has a name property on it
const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const docOne = addUID({ name: "Kaleb", age: 23 });
// This won't work as long as we extend object on the generic
// const docTwo = addUID("Test");
// Without a generic up above, it would say that "age" and "name" do not exist.
console.log(docOne.age);
;
const docThree = {
    uid: 1,
    resourceName: "test",
    data: {
        name: "Kaleb",
        age: 23
    }
};
// Without a generic up above
console.log(docThree.data.age);
