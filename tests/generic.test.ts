describe('generic',function(){

    function anything<Type>(a:Type):Type{
        return a;
    }

    // should declare data type when using length
    function typeOfLength<T>(a:Array<T>):Array<T>{
        console.info(a.length);
        return a ;
    }

    it('should be generic basic return string',function(){
        let student = anything<string>('brandon');
        console.info(student);
    });

    it('should be generic basic return number',function(){
        let numbers = anything<number>(1);
        console.info(numbers);
    });

    it('should be generic basic return array',function(){
        let angka = typeOfLength(["a","b"]);
        for(let number in angka)
        {
            console.info(number);
        }
    });
});