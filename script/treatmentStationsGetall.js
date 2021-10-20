document.addEventListener("DOMContentLoaded", function(){


fetch('http://localhost:8080/stations/getall').then(function(response){

return response.json();


}).then(function(result){

let array = result;

let table = document.getElementById("table");
let ul = document.createElement("ul");
        
	    
        
        for(let i = 0; i < array.length; i++){
            
            let li = document.createElement("li");
            let hr = document.createElement("hr");
         	
            li.innerText ="Identyfikator stacji: \u00A0"+ array[i].id+ "\u00A0 Nazwa stacji: \u00A0" + array[i].nameStation+ "\u00A0 Procedura: \u00A0 "+array[i].procedure.procedureName;
           
            
            li.classList.add("myclass");
            
            ul.appendChild(li);
	        ul.appendChild(hr); 
        }
        
 table.appendChild(ul);





});















})