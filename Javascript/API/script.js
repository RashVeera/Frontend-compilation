photo_btn=document.querySelector('#photo-btn');
photo_grid=document.querySelector('.displays');
let count=0
const fetchphotos = async () =>{
    count+=1;
  try{
    const res=await fetch('https://jsonplaceholder.typicode.com/photos');
    const output=await res.json()
    const minifiedoutput=output.slice(0,100);
    console.log(minifiedoutput);
    minifiedoutput.map(photo => {
        const image=document.createElement('img')
        image.src=photo.url;
        image.alt=`From dummy api : ${photo.id}`
        image.width=200
        image.height=200
        // console.log(image)
        photo_grid.appendChild(image)
        console.log(count)
        if (count%2==0){
            photo_grid.style.display='None';
        }
        else{
            photo_grid.style.display='block';
        }
    })
  }
  catch(err){
    console.log(err)
  }
    
}

photo_btn.addEventListener("click",fetchphotos);
