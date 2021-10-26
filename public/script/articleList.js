document.addEventListener("DOMContentLoaded", function(){

let input = document.getElementById("keyWordInput");
let button = document.getElementById("keyWordButton");
let ul = document.getElementById("articleList");
console.log(ul);

button.addEventListener("click", function(){
    let inputValue = input.value;


    fetch('http://localhost:8080/articles/getall?'+ new URLSearchParams ({
    keyWord: inputValue


    }),).then(function(response){
        return response.json();


    }).then(function(result){

        let resultArray = result;
        console.log(resultArray);

        let liToRemove = document.querySelectorAll("li.toRemove");
        for(let i = 0; i<liToRemove.length; i++){
            liToRemove[i].remove();
        }

        for(let i = 0; i<resultArray.length; i++){
           let li = document.createElement("li");
            li.classList.add("toRemove");
          
            li.innerHTML = resultArray[i];
           
            ul.appendChild(li);
            console.log("przejscie petli");


        }

    })










})














});