// // When setting variables, you should explicitly set the type
// const hello = "world"
// let world: string = 'hello'
// // Same goes for functions, say what each paramater should be and what should be returned
// const getFullName = (name: string, surname: string): string => {
//   return name + " " + surname
// }
// console.log(getFullName('Kaleb', 'Dykema'))
// // Create templates for objects called interfaces, which is set to an object as a type
// // ? creates an optional variable
// // () creates a function, the type is what the function must return
// // Standareds for naming either include Interface after the name or I before the name
// interface IUser {
//   name: string
//   age: number
//   height?: string
//   getMessage(): string
// }
// const user: IUser = {
//   name: 'Kaleb',
//   age: 22,
//   height: "6'2",
//   getMessage() {
//     return `Hello ${this.name}`
//   }
// }
// const user2: IUser = {
//   name: 'Crowe',
//   age: 21,
//   getMessage() {
//     return `Goodbye ${this.name}`
//   }
// }
// console.log(user.getMessage())
// // Unions: can allow for multiple types of values
// // Type Aliases: can create type variables
// // Can combine unions and type aliases
// type ID = string
// type PopularTag = string
// type MaybePopularTag = PopularTag | null
// interface IUser {
//   id: ID
//   name: string
//   surname: string
// }
// const popularTags: PopularTag[] = ['dragon', 'coffee']
// const dragonTags: MaybePopularTag = []
// let username: string = 'kaleb'
// let pageName: string | number = '1'
// let errorMessage: string | null = null
// let user: IUser | null = null
// let someProp: string | number | null | undefined | string[] | object
// // Void: doesn't return anything
// const doSomething = (): void => {
//   console.log('do something')
// }
// // Void can only be null or undefined
// // let foo: void = null
// // foo = undefined
// // Any turns off all TS checking. Avoid using!!!
// let foo: any = 'foo'
// console.log(foo.bar())
// // Never is a function that never ends
// const doSomething = (): never => {
//   throw 'never'
//   // console.log('do something')
// }
// // Unknown, can't assign unknown directly to any other type
// // Type assertion can be used to change the type of a variable, by using as to unknown then to something else
// let vAny: any = 10
// let vUnknown: unknown = 10
// let s1: string = vAny
// let s2: string = vUnknown as string
// let pageNumber: string = '1'
// let numericPageNumber: number = pageNumber as unknown as number
// console.log(vAny.foo())
// console.log(vUnknown.foo())
// // Can also type assert with any
// let page: any = '1'
// let pageNumber = page as string
// // DOM Elements are automatically defined as generic elements, but you should type it more specifically
// const someElement = document.querySelector('.foo') as HTMLInputElement
// console.log('someElement', someElement.value)
// // Event Listeners, use HTMLInputElement for e.target
// const someElement = document.querySelector('.foo')
// someElement.addEventListener('blur', (event) => {
//   const target = event.target as HTMLInputElement
//   console.log('event', target.value)
// })
// // Clases, everything is public by defualt, but can now make things private and protected
// // Private: cannot access outside of its scope
// // Protected: can only access inside its classes and inside classes that extend it
// // Readonly: can't rewrite, but can read; like a const for classes
// // Static: only accessible in the class itself, not an instance
// interface IUser {
//   getFullName(): string
// }
// class User implements IUser {
//   protected firstName: string
//   protected lastName: string
//   readonly unchangeableName: string
//   static readonly maxAge = 50
//   constructor(firstName: string, lastName: string){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.unchangeableName = firstName
//   }
//   // changeUnchangeableName(): void {
//   //   this.unchangeableName = 'foo'
//   // }
//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// const user = new User('Kaleb', 'Dykema')
// console.log(user.getFullName())
// console.log(User.maxAge)
// class Admin extends User {
//   private editor: string
//   setEditor(editor: string): void{
//     this.editor = editor
//   }
//   getEditor(): string{
//     return this.editor
//   }
// }
// const admin = new Admin('foo', ' barr')
// console.log(admin.getFullName())
// // Function which will take an object as a parameter set to a generic datatpye in <>
// // Used to make sure an object is being passed through
// // Generic datatypes can have multiple arguments as well
// // const updatedArray = append<string>('baz', ['foo', 'bar'])
// // const searchStr = 'foo'
// // const_hasSearchString = any<string>((el: string) => el.contains(searchStr),['fooooo', 'bar', 'baz'])
// const addId = <T extends object>(obj: T) => {
//   const id = Math.random().toString(16)
//   return {
//     ...obj,
//     id
//   }
// }
// interface IUser<T, V> {
//   name: string
//   data: T
//   meta: V
// }
// const user: IUser<{meta: string}, string> = {
//   name: 'Jack',
//   data: {
//     meta: 'foo'
//   },
//   meta: 'bar'
// }
// const user2: IUser<string[]> = {
//   name: 'John',
//   data: ['foo', 'bar', 'baz']
// }
// const results = addId<IUser>(user)
// console.log(results)
// // Enums: enumerables
// const statuses = {
//   notStarted: 0,
//   inProgress: 1,
//   done: 2
// }
// console.log(statuses.inProgress)
// enum StatusENUM {
//   NotStarted = 'notStarted',
//   InProgress = 'inProgress',
//   Done = 'done'
// }
// interface Task {
//   id: string
//   status: StatusENUM
// }
// let notStartedStatus: StatusENUM = StatusENUM.NotStarted
// notStartedStatus = StatusENUM.Done
// console.log(StatusENUM.InProgress)
