let myToDos = [
{
    text: "Vynést koš",
    completion: false,
}, 
{
    text: "Dojít nakoupit",
    completion: false,
}, 
{
    text: "Uklidit",
    completion: true,
}, 
{
    text: "Nakrmit psa",
    completion: true,
}, 
{
    text: "Nakrmit kočku",
    completion: false,
}]

let toDoLeft = myToDos.filter(function(oneToDo){
    return !oneToDo.completion
})

const paragraph = document.createElement("p");
paragraph.textContent = `Ještě zbýva ${toDoLeft.length} úkolů.`

document.querySelector("main").appendChild(paragraph);

for(let i = 0; i < myToDos.length; i++){
    let paragraph = document.createElement("p")
    paragraph.textContent = myToDos[i].text
    document.querySelector("main").appendChild(paragraph)
}

document.querySelector("a").addEventListener("click", function(event){
    event.target.textContent = "Ahoj"

})

