describe('generic type interface',()=>{

    interface returnValue<Input>{
        obj : Input;
    }

    it('should be interface',()=> {
        const objectInstance:returnValue<number> = {
            obj : 1,
         }
         console.info(objectInstance.obj);
    })
});