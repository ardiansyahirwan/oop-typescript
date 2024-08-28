<h2>Documentation TS OOP</h2>

- [Installation](#installation)
- [Class](#class)
- [Constructor](#constructor)
- [Property or Field](#property-or-field)
  - [Property with Default Value](#property-with-default-value)
- [Method](#method)
- [Setter and Getter](#setter-and-getter)
- [Inheritance](#inheritance)
  - [Interface Inheritance](#interface-inheritance)
- [Super Constructor](#super-constructor)
- [Method Overriding](#method-overriding)
- [Super Method](#super-method)
- [Visibility](#visibility)
- [Parameter Properties](#parameter-properties)
- [Parameter instanceof](#parameter-instanceof)
- [Polymorphism](#polymorphism)
- [Method Polymorphisme](#method-polymorphisme)
- [Type Casting](#type-casting)
- [Abstract Class](#abstract-class)
- [Static](#static)
- [Namespace](#namespace)


# Installation
Please Follow TS basic for installation from github [Intallation basic TS](https://github.com/ardiansyahirwan/belajar-typescript-dasar?tab=readme-ov-file#installation)
<br/>
<br/>

# Class
**Class** is a blueprint for make an object. **Object** can have an Attribute, methods. For instance an object from class you can use keyword ``new``
```typescript
//Define class at customer.ts
class Customer {}

// instance an object from class
const customer:Costumer = new Costumer();
```
<br/>
<br/>

# Constructor
is a first method were execute in class. Constructor not return a value.
```typescript
class Customer {
      constructor () {
         console.info( "new Customer has Instance" )
      }
}
// when instance new Customer will be return "new Customer has Instance"
new Customer();
```
<br/>
<br/>

# Property or Field
Property or attribute or Field is a variable when declare in class. Properties kind is mandatory (required), optional and readonly. if property is mandatory, is must to declare in [constructor](#constructor).
```typescript
class Customer {
   //define properties
      name: string;
      age: number;
      address?: string;

      constructor ( name: string, age: number ) {
         this.name = name;
         this.age = age;
      }
   }

   // when instance an object will return a value
   new Costumer('budi', 21);
```
## Property with Default Value
```typescript
class Customer {

   name: string = "guest";
   age: number;
   address?: string;

}
```
<br/>
<br/>

# Method
Method or function in a class same with javascript
```typescript
sayHello(): string {
   return `hello ${ this.name }`;
}
```
<br/>
<br/>

# Setter and Getter
setter in TS use method with keyword ``set``, and getter use ``get``. actually setter and getter call an ``accessor`` this was created with ``_``. example ``_name``.
```typescript
 class Person {
      _name: string = "";

      get name(): string {
         return this._name;
      }

      set name( value ) {
         this._name = value;
      }
   }

   const person:Person = new Person();
   console.info(person.name = "Joko");
   ```
   <br/>
   <br/>

# Inheritance
Inheritance it about how to inherit attribute and method into child class. actually inheritance use keyword ``extends`` in class. Parent Class in TS just one, and child class who inherited a parent class can access all method in parent class, child class can be a parent class too, if they inherited to other class.
```typescript
class Employee {
   name: string;

   constructor ( name: string ) {
      this.name = name;
   }
}

   class Manager extends Employee { }

   class Director extends Manager { }

   const employee: Employee = new Employee( "joko" );
   const manager: Manager = new Manager( "budi" );
   const director: Director = new Director( "santoso" );
   ```
   in this case ``manager`` and ``director`` can access parent attribute from employee, cause ``manager`` and ``director`` inherit ``employee``
   ## Interface Inheritance
   selain class we can inherit an interface. for inherit an interface we can use ``implements``. Interface use as contract file. we can inherit more than one interface.
   ```typescript
    interface Employee {
      name: string;
   }

   interface Division {
      division( division: string ): string;
   }

   class Manager implements Employee, Division {
      name: string;

      constructor ( name: string ) {
         this.name = name;
      }

      division( division: string ): string {
         return `Hello i am ${ this.name }, Im from division ${ division }`;
      }
   }

   // call a class and method were inherited
    const manager: Manager = new Manager( "budi" );
   console.info( manager.division( 'IT' ) );
   ```
   <br/>
   <br/>

# Super Constructor
sometimes in child class we want to declare ``constructor()`` method, but we should to declare parent constructor too in child class. to clear that, we can call method ``super()`` for declare ``parent contructor`` in child class.
```typescript
// class manager implements Employee and Division
 class Director extends Manager {
      sdm: number;

      constructor ( sdm: number, name: string ) {
         super( name )
         this.sdm = sdm;
      }

      division( division: string ): string {
         return `hello im ${ this.name } from division ${ division } and i've ${ this.sdm } person`;
      }
   }
```
in ``Manager class`` as parents class who implements ``Employee Interfaces`` and ``Division Interfaces`` have cosntructor. so if ``Director class`` as child class want to declare constructor, ``Director class`` should declare parent class constructor, cause ``Director class`` extended ``Manager class``. in TS it doing with declare ``super()`` method.
<br/>
<br/>

# Method Overriding
Override method is you declare method inherit from parent class, and you can rewrite code on method.
```typescript
class Greeting {
      greeting( name: string ): string {
         return `Hello ${ name }`;
      }
   }

// class person inherited by Greeting and Override method greeting

class Person extends Greeting {
   greeting( name: string ): string {
      return `Hello ${ name } how are you today ?`
   }
}

 const person: Person = new Person();
 const greet: Greeting = new Greeting();
console.info( person.greeting( 'Budi' ) );
console.info( greet.greeting( 'Budi' ) );
```
<br/>
<br/>

# Super Method
You in child class who inherited by parent class, and you want to call method parent class into your child class method, you can use keyword ``super`` in your child class.
```typescript
class Greeting {
      greeting( name: string ): string {
         return `Hello ${ name }`;
      }
   }

// class person inherited by Greeting and Override method greeting

 class Person extends Greeting {
   greeting( name: string ): string {
      return `Hello ${ name } how are you today ? ` + super.greeting( name );
   }
}

const person: Person = new Person();
console.info( person.greeting( 'Budi' ) );
``` 
<br/>
<br/>

# Visibility
on default visibility in TS or JS is public. in JS private use ``#``. but in TS we can declare as public, private, protected.
- ``public`` is can access in class or from out of class
- ``private`` can access only in class
- ``protected`` can access on class and child class was inherited.
<br/>
<br/>

# Parameter Properties
**_we can define parameter in constructor without declare attribute in class_**. for define in constructor just ``<visibility>nameAttribute:<type>=initialize``. if you define visibility in constructor they will be a parameter Properties.
```typescript
class Person {
      constructor ( public name: string ) {
      }
   }
```
<br/>
<br/>

# Parameter instanceof
when we check are this object instance of class or no, we can use ``instanceof`` for throwing an boolean. we can not use ``typeof`` for checking instance object.
```typescript
class Person { }
// instance object from person
const person:Person = new Person();
// checking instance of
if(person instanceof Person){
   // condition true
} else {
   //condition false
}
```
<br/>
<br/>

# Polymorphism
in OOP Polymorphism describe as Object ability for berubah bentuk ke bentuk lain. Polymorphism erat kaitannya dengan inheritance. Selama perubahan bentuknya masih dalam inheritance nya itu tidak menjadi masalah.
```typescript
 class Product {
      constructor ( public name: string ) { }
   }

   class Smartphone extends Product { }

   class Iphone extends Smartphone { }

   let product: Product = new Product( 'IP13Max' );
      console.info( product );

      product = new Smartphone( "Samsung A3" )
      console.info( product );

      product = new Iphone( "4S" )
      console.info( product );
```
yang di maksud polymorphism adalah kemampua suatu object untuk berubah bentuk sesuai dengan inheritance nya.
<br/>
<br/>

# Method Polymorphisme
Kita bisa mengirim method turunan dari parent class nya,
```typescript
 function hasProduct( product: Product ): void {
      console.info( `yaudah ${ product.name }` );
   }

 hasProduct( new Smartphone( 'BB' ) );
 hasProduct( new Iphone( 'IP15Promax' ) );
```
<br/>
<br/>

# Type Casting
When we doing convertion, pastikan that first checking convertion start with child class. 
```typescript
 function hasProduct( product: Product ): void {
      console.info( `yaudah ${ product.name }` );
   }

if(product instanceof Iphone){
   const iphone = product as Iphone;
   console.info(`yaudah ${iphone.name}`);
}else if(product instanceof Smartphone){
   const smart = product as Smartphone;
   console.info(`yaudah ${smart.name}`);
} else {
   console.info(`yaudah ${product.name}`);
}
```
<br/>
<br/>

# Abstract Class
Abstract class cant be an object withkey ``new``, abstract class just use as parent class yang nantinya akan menurunkan attribute dan method nya. Abstract class hampir sama dengan interface, bedanya Abstract Class tidak mewajibkan menurunkan semua attribute dan method. if in abstract class, ``abstract`` not declare, so that attribute not required declare in child class.
```typescript
abstract class Person {
      abstract name: string;

      constructor ( public readonly id: number ) { }

      abstract sayHello(): void;
   }

   // abstract can't instance an object, just inherited method and attribute
    class Child extends Person {

         constructor ( public name: string, readonly id: number ) {
            super( id );
         }

         sayHello(): void {
            console.info( `hello ${ this.name }` );
         }
      }
      const person: Child = new Child( 'Budi', 1 );
      person.sayHello();
``` 
<br/>
<br/>

# Static
Static in OOP actually use for make an Utility/Helper Function. Static merupakan kata kunci yang digunakan dalam properties dan method, yang membuat properties dan method tersebut menjadi bukan bagian dari class atau objek tersebut lagi.
static properties atau method properties, seakan akan seperti kita membuat global variable. dan kita juga bisa menambahkan visibility di dalamnya.
```typescript
class Config {
      static AUTHOR: string = "Budi";
      static LANGUAGE: string = "Typescript";
   }

console.info( Config.LANGUAGE );
```
<br/>
<br/>

# Namespace
Untuk memanagemen yang ada di dalam modul
```typescript
export namespace Config {
   export const NAME: string = "Applicants";
   export const LANGUAGE: string = "Typescript";
}

// in other file
// try to call name from namespace
import { Config } from "../src/config";
  console.info( Config.NAME );
```
