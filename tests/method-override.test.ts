describe( 'Method Override', () => {
   class Greeting {
      greeting( name: string ): string {
         return `Hello ${ name }`;
      }
   }

   it( 'override method greeting', () => {
      class Person extends Greeting {
         greeting( name: string ): string {
            return `Hello ${ name } how are you today ?`
         }
      }

      const person: Person = new Person();
      const greet: Greeting = new Greeting();
      console.info( person.greeting( 'Budi' ) );
      console.info( greet.greeting( 'Budi' ) );
   } );

   it( 'super method', () => {
      class Person extends Greeting {
         greeting( name: string ): string {
            return `Hello ${ name } how are you today ? ` + super.greeting( name );
         }
      }

      const person: Person = new Person();
      console.info( person.greeting( 'Budi' ) );
   } );


} );
