describe( 'Visibility', () => {
   class Counter {
      private count: number = 0;
      address?: string = "Depok";
      protected no: number = 0;

      increment() {
         this.count++
      }

      getCount(): number {
         return this.count;
      }
   }

   class DoubleCount extends Counter {
      increment(): void {
         this.no += 2;
      }

      getCount(): number {
         return this.no;
      }
   }

   it( 'should be private', () => {
      let counter: Counter = new Counter();
      counter.increment();
      counter.increment();
      console.info( counter.getCount() );
   } );

   it( 'should public', () => {
      let counter: Counter = new Counter();
      counter.address = "Bojong";
      console.info( counter.address );
   } );

   it( 'should be protected', () => {
      let counter: Counter = new DoubleCount();
      counter.increment();
      counter.increment();
      console.info( counter.getCount() );
   } );

} );
