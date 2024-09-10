describe('generic function', ()=>{
    it('should return string',()=>{
        function returnValue<Type>(name:Type):Type{
            return name;
        }
        expect(returnValue<string>("irwan")).toBe("irwan");
    })

    it('should return number',()=>{
        function returnValue<Type>(name:Type):Type{
            return name;
        }
        expect(returnValue<number>(1)).toBe(1);
    })

    it('should function expression',()=>{
        let returnValue = <Value>(name:Value):Value => name ;
        console.info(returnValue("ayam"))
    });
})