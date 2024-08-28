describe( 'Inheritance', () => {

   class Employee {
      name: string;

      constructor ( name: string ) {
         this.name = name;
      }
   }

   class Manager extends Employee { }

   class Director extends Manager { }

   it( 'should can access attribute parent', () => {
      const employee: Employee = new Employee( "joko" );
      const manager: Manager = new Manager( "budi" );
      const director: Director = new Director( "santoso" );

      console.info( employee );
      console.info( manager );
      console.info( director );
   } );

} );
