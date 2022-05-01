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

## Generics
Generics are used to denote a type that can be different, but you still want to be defined as a tpye and not `any`. A generic captures whatever item we pass into the an instansiation and the properties on it so the "type" is valid.
   - Here's an example with a function.
      ```
      // <T> captures whatever item we pass into the function and the properties on it so the "type" is valid.

      // This only accepts any type essentially
      const addUID = <T> (obj: T) => {
      // This accepts any object
      const addUID = <T extends object> (obj: T) => {
      // This accepts an object as long as it has a name property on it
      const addUID = <T extends { name: string }> (obj: T) => {
         const uid = Math.floor(Math.random() * 100);
         return { ...obj, uid };
      }

      const docOne = addUID({ name: "Kaleb", age: 23 });

      // This won't work as long as we extend object on the generic
      const docTwo = addUID("Test");

      // Without a generic up above, it would say that "age" and "name" do not exist.
      console.log(docOne.age);
      ```
   - Here's an example with an interface.
      ```
      // Generics are very useful with interfaces
      interface Resource<T> {
         uid: number,
         resourceName: string,
         data: T
      };

      const docThree: Resource<string> = {
         uid: 1,
         resourceName: "test",
         data: "Kaleb"
      };

      const docFour: Resource<string[]> = {
         uid: 2,
         resourceName: "foo",
         data: ["Kaleb", "Crowe"]
      }

      const docFive: Resource<{name: string, age: number}> = {
         uid: 2,
         resourceName: "foo",
         data: {
            name: "Kaleb",
            age: 23
         }
      }
      ```

## Enums
Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums. These will be tracked as numberes/indexes. For example:
   ```
   enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

   interface Resource<T> {
      uid: number,
      resourceType: ResourceType,
      data: T
   }

   const docOne: Resource<{ name: string, age: number }> = {
      uid: 1,
      resourceType: ResourceType.AUTHOR,
      data: {
         name: "Kaleb",
         age: 23
      }
   };

   const docTwo: Resource<{ name: string, age: number }> = {
      uid: 2,
      resourceType: ResourceType.DIRECTOR,
      data: {
         name: "Crowe",
         age: 22
      }
   };

   // When logging these, the resourceTypes will be numbers, not AUTHOR or DIRECTOR
   console.log(docOne, docTwo);
   ```

## Tuples
A tuple is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
   - An example showing tuples vs. a normal array.
      ```
      // Normally, you can just change the types of each thing within an array as you wish
      let arr = ["kaleb", 23, true];
      arr[0] = 5;
      arr[1] = false;
      arr[2] = "Crowe";
      arr = [true, "string here", 85];

      // These types defined below are fixed.
      let tup: [string, number, boolean] = ["Kaleb", 23, true]

      // None of this works.
      tup[0] = 5;
      tup[1] = false;
      tup[2] = "Crowe";
      tup = [true, "string here", 85];
      ```
   - A practical example.
      ```
      let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber];

      let doc: HasFormatter;

      if (type.value === "Invoice") {
         // Without defining values as a tuple up above, this would not work.
         doc = new Invoice(...values);
      }
      else {
         // Without defining values as a tuple up above, this would not work.
         doc = new Payment(...values);
      }
      ```