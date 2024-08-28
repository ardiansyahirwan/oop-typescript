describe( 'Setter and Getter', () => {

   class Person {
      _name: string = "";

      get name(): string {
         return this._name;
      }

      set name( value ) {
         this._name = value;
      }
   }

   it( 'use setter and getter', () => {
      const person: Person = new Person();
      console.info( person.name = "Joko" );
      console.info( person.name = "budi" );
   } );

} );
