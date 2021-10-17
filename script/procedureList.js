
document.addEventListener("DOMContentLoaded", function(){

    fetch('http://localhost:8080/procedure/getall').then(function(response){

        return response.json();

    }).then(function(result){
	
	
        let tabela = document.getElementById("tabela");
        let ul = document.createElement("ul");
        
	    let array = result;
        
        for(let i = 0; i < array.length; i++){
            
            let li = document.createElement("li");
            let hr = document.createElement("hr");
         	
            li.innerText ="Nazwa procedury: \u00A0" + array[i].procedureName+ "\u00A0 Czas procedury \u00A0 "+array[i].procedureTime;
           
            
            li.classList.add("mojaklasa");
            
            ul.appendChild(li);
	        ul.appendChild(hr); 
        }
        
 tabela.appendChild(ul);

    })
});
