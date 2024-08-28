describe( 'Class', () => {

   class Customer {
      name: string;
      age: number;
      address?: string;

      constructor ( name: string = "guest", age: number ) {
         this.name = name;
         this.age = age;
      }

      sayHello(): string {
         return `hello ${ this.name }`;
      }
   }

   it( 'should instance new object', () => {
      const customer: Customer = new Customer( "budi", 21 );
      console.info( customer )
   } );

   it( 'Should define default value', () => {
      const customer: Customer = new Customer( "agus", 21 );
      console.info( customer );
   } );

   it( 'should use method', () => {
      const customer: Customer = new Customer( "agus", 21 );
      console.info( customer.sayHello() );
   } );

} );
