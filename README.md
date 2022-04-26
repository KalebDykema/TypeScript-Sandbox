# TypeScript Sandbox

## Compilation
First, globally install the TypeScript compiler with ``npm i -g typescript``.

Compile once with ``tsc sandbox.ts``.

Watch a file and compile on save with ``tsc sandbox.ts -w``.

Watch and compile all files on save with ``tsc -w``, as long as you have a src folder specified in ``tsconfig.json``.

## Setting A Type
**NOTE**: You can implicity set types by setting a variable equal to a value of the type you wish it to be. For example, ``const myString = "test";`` is a string. This also applies to function return types.
- Variables
   - This is rather simple.
      ```
      const myString: string = "Hello world!";
      ```
- Functions
   - You can specify the types of the arguments and the returned value.
      ```
      const circ = (diameter: number): number => {
         return diameter * Number.PI;
      };

      // Can also specifiy an optional argument with a questions mark
      const sayHello = (name?: string): void => {
         if (name) {
            console.log(`Hello ${name}!`);
         }
         else {
            console.log("No one's home.");
         }
      };

      // If an argument has a default value, it's automatically marked as optional. It can be implicity or explicity typed, depending on your preference or use-case.
      const sayGoodbye = (name: string = "Kaleb") => {
         console.log(`Hello ${name}!`);
      };
      ```

## Valid Types
- ``string``
- ``number``
- ``boolean``
- ``object`` 
   - **NOTE** It's better to get more specific with an object. For example
      ```
      const myObj: {
         name: string,
         age: number,
         isFamous: boolean
      }
      ```
- ``Function``
- ``[]``
   - **NOTE**: For arrays, you don't generally just use ``[]``. You generally specify the type of the things in the array as well. For example
      ```
      // Only strings
      const myStrings: string[] = [];
      
      // Only numbers
      const myStrings: number[] = [];
      
      // Strings and numbers using the pipe operator
      const myStrings: (string|number)[] = [];

      // Objects with a specified structure
      const people: {name: string, age: number, isFamous: boolean}[] = [];
      
      // Can also use classes. Depend like Person is defined somewhere.
      const people: Person[] = [];
      ```
- ``void``
   - **NOTE**: Only used to specify the last of a return on a function.
- ``any``
   -**NOTE**: This is better for testing than anything else. If you're using this in production code, you might as well being using JavaScript instead.

## Operators
- ``|`` 
   - The pipe operator is use to specifiy a union type, which can be multiple types.
      ```
      const myVar: string | number;
      ```
- ``?``
   - The optional operator marks an argument within a function as optional.
      ```
      function addNums (a: number, b: number, c?: number) {
      ...
      ```
- ``!``
   - The bang operator is used to mark a variable as not null when there's a chance it could be. This is primarialy useful for DOM manipulation.
      ```
      const anchor = document.querySelector("a")!;

      // TypeScript would normally yell at us about this potentially being null, but the bang operator up above stops that from happening.
      console.log(anchor.href);
      ```

## Aliases
You can save a type or group of types on an alias for later reference. For example:
   ```
   type StringOrNum = string | num;

   const myVar: StringOrNum = 5;
   myVar = "test";
   ```

## Function Signatures
You can specify all the argument types and return type of a function before actually creating it. For example:
   ```
   let substract: (a: number, b, number) => number;
   substract = (numOne, numTwo) => {
      return numOne - numtwo;
   };
   ```

## Type Casting
Sometimes you want to take an implicity typed element and type it more specifically. This is common with DOM manipulation. For example:
   ```
   // Since we're selecting an <a> element explicity, its type is set to HTLMAnchorElement without any work from us.
   const anchor = document.querySelector("a");

   // Since we're selecting an <a> element with a clag, its type is set to Element. We need to cast its type as the more specific HTMLAnchorElement.
   const otherAnchor = document.querySelector(".my-anchor") as HTMLAnchorElement;
   ```

## Classes
Classes in TypeScript can be handled much more easily than JavaScript when it comes to setting access on properties and setting up a constructor. You can use ``public``, ``private``, and ``readonly``, all of which are pretty self-explanatory.
   - Here's an example on setting access for properties.
      ```
      class Invoice {
         private client: string;
         readonly detail: string;
         public amount: number;

         constructor (c: string, d: string, a: number) {
            this.client = c;
            this.detail = d;
            this.amount = a;
         };

         format() {
            return `${this.client} owes ${this.amount} for ${this.detail}`;
         }
      };
      ```
   - The above can be simplified by defining it in the constructor as follows.
      ```
      class Invoice {
         constructor (
            private client: string,
            readonly detail: string,
            public amount: number
         ){}

         format() {
            return `${this.client} owes ${this.amount} for ${this.detail}`;
         }
      };
      ```

## Interfaces
Interfaces are similar to classes. For commonly, it's used to ensure that a class or multiple classes have the certain values. However, it can have more than that as well. For example
   ```
   interface HasFormatter {
      format(): string;
   }

   // This must have the format() function and it must return a string. However, it can have more.
   class Invoice implements Formatter {
      constructor (
         private client: string,
         readonly detail: string,
         public amount: number
      ){}

      format() {
         return `${this.client} owes ${this.amount} for ${this.detail}`;
      }
   };
   ```