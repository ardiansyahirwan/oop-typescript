describe('decorators',()=>{
    it('should be decorator',()=> {
        function first(){
            // make decorator factory
            console.info('first() evaluated');
            return function(target:any, propertyKey:string, descriptor:PropertyDescriptor)
            {
                //decorator
                console.info("first() called");
            }
        }

        class Decorator {
            @first()
            hello():string
            {
                return "hello ges"; 
            }
        }

        let obj = new Decorator();
        obj.hello();
    });
});