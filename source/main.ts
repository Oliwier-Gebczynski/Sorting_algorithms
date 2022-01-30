import { swap, search, quickSort } from './script/quickSort';
import { createElements, printElements } from './script/htmlElements';

// variables/consts 
const reset = document.querySelector("#reset");
const start = document.querySelector("#start");
const buttons = document.querySelectorAll(".nav__button");

let listElement = [];
let list_element = createElements(listElement);

// get method
let method: string = "";
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        method = button.getAttribute("name");
    })
});


// start sort 
start.addEventListener("click", function(){
    console.log(method);

    if(method == "quickSort"){
        listElement = quickSort(listElement, 0, listElement.length-1);
        printElements(createElements(listElement));
    }
})


// reset array with div
reset.addEventListener("click", function(event){
    printElements(createElements(listElement));
});

//QUICK SORT 


