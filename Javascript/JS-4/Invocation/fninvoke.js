function sayHello(){
    console.log(this);
}

sayHello();


const fn2 = () =>{
    console.log(this);
}

fn2();