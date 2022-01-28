const reset = document.querySelector("#reset");
const main = document.querySelector(".main");

function createElements(){
    const listElement = [];
    main.innerHTML = "";
    for (let i = 1; i<=10; i++){
        const div = document.createElement("div");
        div.innerHTML = `${i}`;
        div.classList.add("bar", `bar_${i}`);
        
        const element = [];
        element.push(i);
        element.push(div)

        listElement.push(element);
    }
    
    return listElement;
}

function printElements(listElement) {
    for (let i = 0; i<=9; i++){
        main.appendChild(listElement[i][1]);
    }
}

let list_element = createElements();

reset.addEventListener("click", function(event){
    printElements(createElements());
});