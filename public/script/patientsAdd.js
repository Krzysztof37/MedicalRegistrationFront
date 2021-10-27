

document.addEventListener("DOMContentLoaded", function(){

    fetch('https://medical-registration-heroku.herokuapp.com/patients/add').then(function(response){

        return response.json();

    }).then(function(result){
    
    	let array = result;
	
	    let procedures = document.querySelector("select");
       console.log(procedures);
        
        
     
        for(let i = 0; i < array.length; i++){
        let option = document.createElement("option");
      
        option.setAttribute("value", array[i].id);
        option.innerText = array[i].procedureName;
        procedures.appendChild(option);
        
        }
        
     })

     let button = document.querySelector("button");
     console.log(button);

    
    

});
































