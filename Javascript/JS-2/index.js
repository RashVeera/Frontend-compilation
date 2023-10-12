//var, let and const
// var x=30
// var x=20
// console.log(x)
// 20

// let x=30
// let x=20
// console.log(x)
// Cannot redeclare

// const x;
//  x=20
// console.log(x)
// Missing initializer

// Implicit Coersion

// console.log(true-false)
// console.log(true*false)
// console.log('String'*'f')

// console.log(6++ + +'6')
// console.log(6+ +'6')
// console.log('Scaler'+'Academy')
// console.log('Scaler'+'Academy'-true)


// Code Executions and hoisting
// var a=2;

// function b(){
//   a=5
//   return a;
//   function a(){
//     console.log(a)
//   }
// }

// console.log(b(),a)
// Output: 5 2

// var a=2;

// function b(){
//   a=5
//   return a;
// }

// console.log(b(),a)

//Output : 5 5

// var a=2;

// function b(){
//     function a(){
//     console.log(a)
//   }
//   a();
//   a=5
//   return a;

// }

// console.log(b(),a)

//Output 5 2

