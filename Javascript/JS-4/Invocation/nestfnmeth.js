obj1={
    a:1,
    b:2,
    sayHi:function() {
        const fn2 = () =>{
            console.log(this);
        }
       fn2();
    }
}

obj1.sayHi();


obj1={
    a:1,
    b:2,
    fn1:() => {
        const fn2 = () =>{
            console.log(this);
        }
       fn2();
    }
}

obj1.fn1();