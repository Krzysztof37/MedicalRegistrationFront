
document.addEventListener("DOMContentLoaded", function(){

    fetch('http://localhost:8080/plans/getall').then(function(response){

        return response.json();

    }).then(function(result){
	
	
        let tabela = document.getElementById("tabela");
        let ul = document.createElement("ul");
        
	    let array = result;
        for(let i = 0; i < array.length; i++){
            let li = document.createElement("li");
            let hr = document.createElement("hr");
            li.innerHTML = array[i]+" \u00A0 "+array[i+1]+"\u00A0"+ array[i+2]+" \u00A0 "+array[i+3]+"\u00A0"+"<a href='http://localhost:8080/plan/delete?idTreatmentPlan="+array[i+4]+"'onclick='window.location.reload(true);'>Usuń</a>";
            i = i+4;
            
            
           li.classList.add("mojaklasa");
            
            ul.appendChild(li);
	        ul.appendChild(hr); 
        }
        console.log(array);
 tabela.appendChild(ul);

    })
});