;
const me = {
    name: "Kaleb",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log("Hello", person.name);
};
greetPerson(me);
// Form Selector
const form = document.querySelector(".new-item-form");
// Input Selectors
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// Set up form event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
export {};
