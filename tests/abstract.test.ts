describe( 'abstract', () => {
   abstract class Person {
      abstract name: string;

      constructor ( public readonly id: number ) { }

      abstract sayHello(): void;
   }
   it( 'can implements abstract', () => {
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
   } );

} );
