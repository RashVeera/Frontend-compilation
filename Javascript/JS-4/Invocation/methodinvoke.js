

obj1={
    a:1,
    b:2,
    sayHi:function() {
        console.log(this);
    }
}

obj1.sayHi();


obj1={
    a:1,
    b:2,
    sayHi:() => {
        console.log(this);
    }
}

obj1.sayHi();