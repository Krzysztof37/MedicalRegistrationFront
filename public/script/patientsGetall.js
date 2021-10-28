
document.addEventListener("DOMContentLoaded", function(){

    fetch('https://medical-registration-heroku.herokuapp.com/patients/getall').then(function(response){

        return response.json();

    }).then(function(result){
	
	
        let table = document.getElementById("table");
        let ul = document.createElement("ul");
        
	    let array = result;
        for(let i = 0; i < array.length; i++){
            let li = document.createElement("li");
            let hr = document.createElement("hr");
         	
            li.innerHTML ="Nazwisko: \u00A0" + array[i].name+ " "+array[i].surName+"\u00A0\u00A0 email: \u00A0 "+array[i].email+ " \u00A0  zabiegi: ";
            
            
            for(let j = 0; j < array[i].procedure.length; j++){
            li.innerHTML = li.innerHTML +" "+ array[i].procedure[j].procedureName;
           
        }
            
            li.innerHTML = li.innerHTML + "\u00A0 <a href='https://medical-registration-heroku.herokuapp.com/patients/delete?patientId="+array[i].id+"' class='toRemove'>Usuń</a>"
           li.classList.add("myclass");
            
            ul.appendChild(li);
	        ul.appendChild(hr); 
        }
        
 table.appendChild(ul);


 let patientsLi = document.querySelectorAll("li.myclass");
 let patientsA = document.querySelectorAll("a.toRemove")
 let hr = document.querySelectorAll("hr");
 
 for(let i = 0; i< patientsA.length; i++){
 
     patientsA[i].addEventListener("click", function(event){
 
         event.preventDefault();
         let href = patientsA[i].getAttribute("href");
         fetch(href).then(function(response){
             
         }).then(function(result){
 
         patientsLi[i].remove();
         hr[i].remove();
 
         })
 
 
 
 
     })
 
 
 }

        

    })

   



});
