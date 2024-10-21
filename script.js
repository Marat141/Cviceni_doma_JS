//Document Object Model => DOM
//Udělá si strukturu kódu (obdelníky atd)

//querySelector ==> vybere první možnost, pokud mám v html dvakrát <p> tak vybere to první co najde
//let heading = document.querySelector("h1")
//console.log(heading)
//let paragraph = document.querySelector("p")
//console.log(paragraph)

//querySelectorAll ==> všechny prvky se vyberou
let allparagraphs = document.querySelectorAll("p")
console.log(allparagraphs[0].innerHTML)
console.log(allparagraphs[1])


//getElementById


//getElementByClassName