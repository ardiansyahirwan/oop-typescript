import { Config } from "../src/config";

describe( 'Namespace test', () => {
   it( 'can display data namespace', () => {
      console.info( Config.NAME );
   } );

} );
