
document.addEventListener("DOMContentLoaded", function(){

    fetch('http://localhost:8080/plans/getall').then(function(response){

        return response.json();

    }).then(function(result){
	
	
        let tabela = document.getElementById("table");
        let ul = document.createElement("ul");
        
	    let array = result;
        for(let i = 0; i < array.length; i++){
            let li = document.createElement("li");
            li.classList.add("toRemove");
            let hr = document.createElement("hr");
            li.innerHTML = array[i]+" \u00A0 "+array[i+1]+"\u00A0"+ array[i+2]+" \u00A0 "+array[i+3]+"\u00A0"+"<a href='http://localhost:8080/plan/delete?idTreatmentPlan="+array[i+4]+"' class='toRem'>Usuń</a>";
            i = i+4;
            
            
           li.classList.add("myclass");
            
            ul.appendChild(li);
	        ul.appendChild(hr); 
        }
        console.log(array);
 tabela.appendChild(ul);
 
 let a = document.querySelectorAll("a.toRem");
 let liToRemove = document.querySelectorAll("li.toRemove");
 let hrToRemove = document.querySelectorAll("hr");
 
 for(let i = 0; i < a.length; i++){

    a[i].addEventListener("click", function(event){
    
        event.preventDefault();
        let href = a[i].getAttribute("href");

        fetch(href).then(function(response){

        }).then(function(result){


            liToRemove[i].remove();
            hrToRemove[i].remove();

        })








    })



}


    })



});