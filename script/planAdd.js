document.addEventListener("DOMContentLoaded",function(){

    let selectAll = document.querySelectorAll("select");
    console.log(selectAll);
    

fetch('http://localhost:8080/get/date').then(function(response){

return response.json();


}).then(function(result){

let arrayDate = result;
let selectDate = selectAll[0];
console.log(arrayDate);
for(let i = 0; i<arrayDate.length; i++){

    let option = document.createElement("option");
    option.value = arrayDate[i];
    option.innerText = arrayDate[i];
    selectDate.appendChild(option);

}


})

fetch('http://localhost:8080/get/time').then(function(response){

return response.json();


}).then(function(result){

let arrayTime = result;
let selectTime = selectAll[1];

for(let i = 0; i<arrayTime.length; i++){

    let option = document.createElement("option");
    option.value = arrayTime[i];
    option.innerText = arrayTime[i];
    selectTime.appendChild(option);

}


})

fetch('http://localhost:8080/get/patients').then(function(response){

return response.json();


}).then(function(result){

let arrayPatients = result;
let selectPatients = selectAll[2];
console.log(arrayPatients);
for(let i = 0; i<arrayPatients.length; i++){

    let option = document.createElement("option");
    option.value = arrayPatients[i].id;
    option.innerText = arrayPatients[i].surName;
    selectPatients.appendChild(option);

}


})






fetch('http://localhost:8080/get/treatmentStation').then(function(response){

return response.json();


}).then(function(result){

let arrayStations = result;
let selectStations = selectAll[3];

console.log(arrayStations);

for(let i = 0; i<arrayStations.length; i++){
    let option = document.createElement("option");
    option.value = arrayStations[i].id;
    option.innerText = arrayStations[i].nameStation;
    selectStations.appendChild(option);

}


})



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

    console.log("**************");
    let selectDateListener = selectAll[0];
    let selectTimeListener = selectAll[1];
    let selectPatientListener = selectAll[2];
    let selectStationListener = selectAll[3];



        
    timeOut = setTimeout(function(){
   


    fetch('http://localhost:8080/check/dateTime?'+ new URLSearchParams({
        date: selectDateListener.value,
        time: selectTimeListener.value,
        idStation: selectStationListener.value,
        idPatients: selectPatientListener.value
    }),
        )
    .then(function(response){
        
        return response.json();



}).then(function(result){

    let fetchResult = result;
    let optionsHour = selectTimeListener.children;
    console.log(fetchResult);
    for(let i = 0; i< optionsHour.length; i++){
    optionsHour[i].style.backgroundColor = "red";
    }

    for(let i = 0; i< fetchResult.length; i++){
        if(fetchResult[i] == "wolne"){

            optionsHour[i].style.backgroundColor = "green";

        }
    }
   

})
},2000)







   
    
    selectDateListener.addEventListener("change",function(){
        
         let selectDateListenerValue = selectDateListener.value;
         let selectTimeListenerValue = selectTimeListener.value;
         let selectPatientListenerValue = selectPatientListener.value;
         let selectStationListenerValue = selectStationListener.value;
         console.log(selectDateListenerValue);
         console.log(selectTimeListenerValue);
         console.log(selectPatientListenerValue);
         console.log(selectStationListenerValue);

        fetch('http://localhost:8080/check/dateTime?'+ new URLSearchParams({
            date: selectDateListener.value,
            time: selectTimeListener.value,
            idStation: selectStationListener.value,
            idPatients: selectPatientListener.value
        }),
            )
        .then(function(response){
            
            return response.json();



    }).then(function(result){

        let fetchResult = result;
        let optionsHour = selectTimeListener.children;
        console.log(fetchResult);
        for(let i = 0; i< optionsHour.length; i++){
        optionsHour[i].style.backgroundColor = "red";
        }

        for(let i = 0; i< fetchResult.length; i++){
            if(fetchResult[i] == "wolne"){

                optionsHour[i].style.backgroundColor = "green";

            }
        }
       

    })

})


selectPatientListener.addEventListener("change",function(){
        
  
 
   fetch('http://localhost:8080/check/dateTime?'+ new URLSearchParams({
       date: selectDateListener.value,
       time: selectTimeListener.value,
       idStation: selectStationListener.value,
       idPatients: selectPatientListener.value
   }),
       )
   .then(function(response){
       
       return response.json();



}).then(function(result){

   let fetchResult = result;
   let optionsHour = selectTimeListener.children;
   console.log(fetchResult);
   for(let i = 0; i< optionsHour.length; i++){
   optionsHour[i].style.backgroundColor = "red";
   }

   for(let i = 0; i< fetchResult.length; i++){
       if(fetchResult[i] == "wolne"){

           optionsHour[i].style.backgroundColor = "green";

       }
   }
   

})

})


selectStationListener.addEventListener("change",function(){
        
   

   fetch('http://localhost:8080/check/dateTime?'+ new URLSearchParams({
       date: selectDateListener.value,
       time: selectTimeListener.value,
       idStation: selectStationListener.value,
       idPatients: selectPatientListener.value
   }),
       )
   .then(function(response){
       
       return response.json();



}).then(function(result){

   let fetchResult = result;
   let optionsHour = selectTimeListener.children;
   console.log(fetchResult);
   for(let i = 0; i< optionsHour.length; i++){
   optionsHour[i].style.backgroundColor = "red";
   }

   for(let i = 0; i< fetchResult.length; i++){
       if(fetchResult[i] == "wolne"){

           optionsHour[i].style.backgroundColor = "green";

       }
   }
  

})

})




})