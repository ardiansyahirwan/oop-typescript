describe( 'Polymorphism', () => {
   class Product {
      constructor ( public name: string ) { }
   }

   class Smartphone extends Product { }

   class Iphone extends Smartphone { }

   function hasProduct( product: Product ): void {
      console.info( `yaudah ${ product.name }` );
   }

   it( 'should polymorphism', () => {
      let product: Product = new Product( 'IP13Max' );
      console.info( product );

      product = new Smartphone( "Samsung A3" )
      console.info( product );

      product = new Iphone( "4S" )
      console.info( product );
   } );

   it( 'method polymorphism', () => {
      hasProduct( new Smartphone( 'BB' ) );
      hasProduct( new Iphone( 'IP15Promax' ) );
   } );

   it( 'Type Casting', () => {
      let product: Product = new Iphone( 'IP13Max' );
      console.info( product );
      if ( product instanceof Iphone ) {
         const iphone = product as Iphone;
         console.info( `yaudah ${ iphone.name }` );
      } else if ( product instanceof Smartphone ) {
         const smart = product as Smartphone;
         console.info( `yaudah ${ smart.name }` );
      } else {
         console.info( `yaudah ${ product.name }` );
      }
   } );


} );
