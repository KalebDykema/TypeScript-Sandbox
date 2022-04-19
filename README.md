# TypeScript Sandbox

## Compilation
First, globally install the TypeScript compiler with ``npm i -g typescript``.

Compile once with ``tsc sandbox.ts``.

Watch a file and compile on save with ``tsc sandbox.ts -w``.

Watch and compile all files on save with ``tsc -w``, as long as you have a src folder specified in ``tsconfig.json``.

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

      // Objects with a specified strucutre
      const people: {name: string, age: number, isFamous: boolean}[] = [];
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

## Setting Types
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