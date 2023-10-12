   // Write your JS program here ====
   let btn=document.getElementsByClassName("for");
   let b=document.querySelector("body");
   console.log(btn);
   btn[0].addEventListener("click",() => {
      let div1=document.createElement("div")
      div1.style.backgroundColor="red";
      div1.style.display="block";
      div1.innerHTML="Hello";
      b.append(div1)
   });

 

   