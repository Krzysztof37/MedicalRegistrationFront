
document.addEventListener("DOMContentLoaded", function(){

    let form = document.querySelector("form");
    form.addEventListener("submit", (event)=>{
       event.preventDefault();
       let liArray = document.querySelectorAll("li.toRemove");
       let formUl = document.getElementById("formul");
    
       for (let i = 0 ; i < liArray.length; i++ ){
           liArray[i].remove();
       }
    
       fetch(event.target.action,{
           method: 'Post',
           body: new URLSearchParams(new FormData(event.target))
    
       }).then(function(response){
           
    
           return response.json();
       }).then(function(result){
    
    
           let array = result;
           console.log(result);
    
           for(let i = 0; i < array.length; i++ ){
               let li = document.createElement("li");
               li.classList.add("toRemove");
               li.innerText = array[i];
               li.style.fontSize = "20px";
               formUl.appendChild(li);
           }
    
    
       })
    
    })








});
