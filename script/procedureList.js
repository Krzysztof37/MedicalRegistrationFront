
document.addEventListener("DOMContentLoaded", function(){

    fetch('http://localhost:8080/procedure/getall').then(function(response){

        return response.json();

    }).then(function(result){
	
	
        let table = document.getElementById("table");
        let ul = document.createElement("ul");
        
	    let array = result;
        
        for(let i = 0; i < array.length; i++){
            
            let li = document.createElement("li");
            let hr = document.createElement("hr");
         	
            li.innerText ="Nazwa procedury: \u00A0" + array[i].procedureName+ "\u00A0 Czas procedury \u00A0 "+array[i].procedureTime;
           
            
            li.classList.add("myclass");
            
            ul.appendChild(li);
	        ul.appendChild(hr); 
        }
        
 table.appendChild(ul);

    })
});
