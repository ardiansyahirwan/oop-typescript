describe( 'Parameter Properties', () => {

   class Person {
      constructor ( public name: string ) {
      }
   }

   it( 'should parameter properties', () => {
      let person: Person = new Person( 'budi' );
      console.info( person );
   } );
} );
