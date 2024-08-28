describe( 'Static', () => {
   class Config {
      static AUTHOR: string = "Budi";
      static LANGUAGE: string = "Typescript";

      static kaliDua( number: number ): number {
         return number * 2;
      }
   }
   it( 'can support static', () => {
      console.info( Config.LANGUAGE );
   } );

   it( 'can access method', () => {
      console.info( Config.kaliDua( 2 ) );
   } );


} );
