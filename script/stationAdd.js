document.addEventListener("DOMContentLoaded", function(){

    fetch('http://localhost:8080/stations/add').then(function(response){

        return response.json();

    }).then(function(result){
    
    	let array = result;
	
	    let procedures = document.querySelector("select");
        console.log(procedures);
        console.log(array);
        
     
        for(let i = 0; i < array.length; i++){
        let option = document.createElement("option");
      
        option.setAttribute("value", array[i].id);
        option.innerText = array[i].procedureName;
        procedures.appendChild(option);
        
        }
        
     })

 
            let form = document.querySelector("form");


    form.addEventListener("submit", (event) => {
    event.preventDefault();
    let pArray = document.querySelectorAll("p");
    
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
            p.innerText = array[i];
            p.style.fontSize = "20px";
            form.appendChild(p);
        }


    })




   

 });

    


});
