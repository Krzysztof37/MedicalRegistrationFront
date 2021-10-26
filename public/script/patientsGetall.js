
document.addEventListener("DOMContentLoaded", function(){

    fetch('http://localhost:8080/patients/getall').then(function(response){

        return response.json();

    }).then(function(result){
	
	
        let table = document.getElementById("table");
        let ul = document.createElement("ul");
        
	    let array = result;
        for(let i = 0; i < array.length; i++){
            let li = document.createElement("li");
            let hr = document.createElement("hr");
         	
            li.innerText ="Nazwisko: \u00A0" + array[i].name+ " "+array[i].surName+"\u00A0\u00A0 email: \u00A0 "+array[i].email+ " \u00A0  zabiegi: ";
            
            
            for(let j = 0; j < array[i].procedure.length; j++){
            li.innerText = li.innerText +" "+ array[i].procedure[j].procedureName;
           
        }
            
           li.classList.add("myclass");
            
            ul.appendChild(li);
	        ul.appendChild(hr); 
        }
        
 table.appendChild(ul);

    })
});
