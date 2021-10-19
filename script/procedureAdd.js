

document.addEventListener("DOMContentLoaded", function(){


let form = document.querySelector("form");


 form.addEventListener("submit", (event) => {
    event.preventDefault();
    let pArray = document.querySelectorAll("p.toRemove");
    
    for (let i = 0 ; i < pArray.length; i++ ){
        pArray[i].remove();
    }


    fetch(event.target.action,{
        method: 'POST',
         body: new URLSearchParams(new FormData(event.target))
        
         
    }).then(function(response){
        return response.json();
    }).then(function(result){

        
       let array = result;
        console.log(array);
        for(let i = 0; i < array.length; i++ ){
            let p = document.createElement("p");
            p.classList.add("toRemove");
            p.innerText = array[i];
            p.style.fontSize = "20px";
            form.appendChild(p);
        }


    })




   

 });

});