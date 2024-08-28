describe( 'instance of', () => {
   class Person { }

   it( 'should instanceof class', () => {
      const person: Person = new Person();
      expect( person instanceof Person ).toBe( true );
   } );

   it( 'should can not instanceof', () => {
      const person: Person = new Person();
      console.info( typeof person );
   } );


} );
