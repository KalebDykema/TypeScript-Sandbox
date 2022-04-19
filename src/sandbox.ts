const person = "Kaleb";
const age = 23;
const hasRedHair = true;

const anchor = document.querySelector("a");

const circ = (diameter: number) => {
   return diameter * Math.PI;
}

let add: (a: number, b: number) => number;

console.log(circ(7.5));