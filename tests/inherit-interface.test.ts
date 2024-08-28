describe( 'Interface Inheritance', () => {
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

   class Director extends Manager {
      sdm: number;

      constructor ( sdm: number, name: string ) {
         super( name )
         this.sdm = sdm;
      }

      division( division: string ): string {
         return `hello im ${ this.name } from division ${ division } and i've ${ this.sdm } employee`;
      }
   }

   it( 'should implemets a interface', () => {
      const manager: Manager = new Manager( "budi" );
      console.info( manager.division( 'IT' ) );
   } );

   it( 'should implements super constructor', () => {
      const director: Director = new Director( 100, "Brandon" );
      console.info( director.division( "IT" ) );
   } );


} );
