// function outer(){
//     var x=20;
//     function inner(){
//         console.log(x);
//     }
//     return inner
// }
// outer()();

// x value will be 40
// function outer(){
//     var x=20;
//     function inner(){
//         console.log(x);
//     }
//     x=40;
//     return inner
    
// }
// outer()();

// X value will be 20
// function outer(){
//     var x=20;
//     function inner(){
//         console.log(x);
//     }
    
//     return inner
//     x=40;
    
// }
// outer()();

//Data Hiding 
// function counter(){
//     var count=0
//     return function increment(){
//         count++;
//         console.log(count)
//     }
// }
// counter1=counter();
// counter1();

//Constructor functions

// function counter(){
//     var count=0
//     this.increment= function(){
//         count++;
//         console.log(count)
//     }
//     this.decrement= function(){
//         count--;
//         console.log(count)
//     }
// }
// counter1=new counter();
// counter1.increment();
// counter1.increment();
// counter1.decrement();