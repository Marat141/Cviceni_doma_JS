//let /*Vytvářím proměnou*/ firstname = "Marat";
//let secondname = "Fedorov";
//let city = "Plzeň";
//console.log(firstname + " " + secondname + ", " + city);

//let firstName = "Marat";
//let Job = "Student";
//console.log("Ahoj, jmenuji se " + firstName + " a pracuji jako " + Job);

/*String
//let firstName = "Marat";

/*Number
//let age = 19;
//console.log(age);

//Početní operace
//let x = age + 5 * 2;
//
//console.log(x);
*/

//let firstName = "Marat";
//let age = 19;
//console.log("Jmenuji se " + firstName + " a je mi " + age);
//console.log("Za pět let mi bude " + (age + 5));
//let x = age +5 (Přeuložím si to); ===> (age + 5);

/*Proměné nesmím definovat víc jak jendou!
//let age = 20;
/*let*/ //age =30;

/*Názvy proměnných
//let /*Nesmí začínat číslem!! , Speciální znaky kromě => $, _ 5 = 3*;/
//console.log(5);

/*Žádná rezervovaná slova
//let let ==> Jako název(Zabraný název) =5;*/

//let maxPoints = 100;
//
//let student1 = 54;
//let student2 = 16;
//
//let student1Name = "Karel";
//let student2Name = "Tobiaš";
//
//let result1 = (student1 / maxPoints) * 100;
//let result2 = (student2 / maxPoints) * 100;
//
//console.log(student1Name + " dosáhl " + result1 /*((student1 / 100) * 100)*/ + " % uspěšnosti");
//console.log(student2Name + " dosáhl " + result2 /*((student2 / 100) * 100)*/ + " % uspěšnosti");

/*String (text)
let firstName = "Marat";

/*Number (číslo)
let age = 19;

/*Boolean (Pravda/ Nepravda)
let adult = false;

/*Boolean - operátory

//let result1 = age ===21;
//
//console.log(result1);
//
//let result2 = age !==21; /* 19 se nerovná 21*/
//
//console.log(result2);
//
//let result3 = age <=21; /* Menší než 21 */
//
//console.log(result3);
//
//let result4 = age >=21;/* Větší než 21 */
//
//console.log(result4);
/*

=== rovná se

!== nerovná se

< menší než (<=)
> větší než (>=)

*/

//let age = 21; //Definování věku
//let child = age < 18;//Dítě
//
//let adult = age >= 18;//Dospělý
//
//let pensioner = age >= 65;//Důchodce
////Je mu 21 takže je to větší nebo rovno 65. není takže není duchodce
//
////Výpis výsledku
//
//console.log("Dítě: " + child);
//console.log("Dospělý: " + adult);
//console.log("Důchodce: " + pensioner);

//let age = 18;
//
//if (age >= 18) {
//    console.log("Jste dospělý!");
//} else {
//    console.log("Jsi dítě!");
//}
//
//let firstName = "Marat";
//
//if (firstName === "Marat") {
//    console.log("Ahoj Marate")
//} else (
//    console.log("Neznám tě!")
//)


//let firstName ="Marat";
//
////Marat, Martin, Jana
//if (firstName === "Marat") {
//    console.log("Dobrý den Marate, můžete jít dál")
//} 
//else if (firstName === "Martin") {
//    console.log("Dobrý den Martine, můžete jít dál")
//}
//else if (firstName === "Jana") {
//    console.log("Dobrý den Jano, můžete jít dál")
//}
//else {
//    console.log("Nemáte oprávnění!")
//}

//let pozice = "programátor";
//
//if (pozice === "programátor") {
//    console.log("Jaký je rozdíl mezi HTML, CSS, JS?")
//}
//else if (pozice === "administrátort") {
//    console.log("Jaké znáte druhy sítí?")
//}
//else if (pozice === "sekretářka") {
//    console.log("Jaké znáte funkce v exelu?")
//}
//else {
//    console.log("Neplatná volba!")
//}


// a zároveň => && (pravý alt + C) ===> A ZÁROVEŇ
//let firstName = "Marat";
//let height = 178;
//
//if(firstName ==="Marat" && height === 178){
//    console.log("Je podezřelý")
//}
//else {
//    console.log("Nnení podezřelý")
//}
//
//true = true, true
//false = false, true
//false = true, false
//false = false, false
//
// nebo => || (Pravý alt + W)
//
//true = true, true
//true = false, true
//true = true, false
//false = false, false
//if(firstName === "Marat" || height ===178){
//    console.log("Je podezřelý")
//}
//else {
//    console.log("Není podezřelý")
//}


//let teplomer = 10;
//
//if (teplomer <= 10) {
//    console.log("Chladno")
//}
//else if (teplomer > 10 && teplomer <= 25) {
//    console.log ("teplo")
//}
//else if (teplomer >= 26) {
//    console.log("horko")
//}
//else {
//    console.log("Chyba")
//}
//
//let pachatel_kg = 100;
//let pachatel_cm = 190;
//
//if (pachatel_kg === 100 || pachatel_cm == 190) {
//    console.log("Podezřelý")
//}
//else {
//    console.log("Není podezřelý")
//}

/*Scope ==> Rozsah
/*Globální scope (první)
/*Lokální scope (druhá)

//let prvni = "První text";
//
//if(true){
//    console.log(prvni);
//    let druha = "Druhy text";
//}
    //Máte přístup k proměnným, které jsou definované v daném scope nebo v rodičovském scope
*/

/*variable shadowing

//let myName = "Marat";
//
//if(true){
//    let myName = "Harry"; //Přepíše se to
//    if(true){
//        let myName = "Tomáš"
//        console.log(myName)
//    }
//}
//
//if(true) {
//    console.log(myName)
//}
*/

/*Funkce

//function pozdrav1() {
//    console.log("Toto je pozdrav 1")
//}
//
//pozdrav1()
//
//let pozdrav2 = function(){
//    console.log("Toto je pozdrav 2")
//}
//
//pozdrav2()
//
//let pozdrav3 = () => console.log("Toto je pozdrav 3")
//
//pozdrav3()
*/



/*Funkce - parametr a argument

function naDruhou(num # V té zavorce je parametr!! A ta 2 je argument!! #){
    console.log(num * num)
}

naDruhou(2)
naDruhou(5)
naDruhou(10)

function zdraviciFunkce(name) {
    console.log("Ahoj, já jsem " + name)
}

zdraviciFunkce("Marat")
zdraviciFunkce("Simona")
*/


/*function naDruhou(number){
    let result = number * number
    return result //vrať a ulož do result
}

let value1 = naDruhou(5)

function zvysovaciFunkce(num){
    let result = num + 100
    return result
}

let value2 = zvysovaciFunkce(7)
console.log(value2)
*/


/*let age = 18
//
//function adultChecker(age){
//    if (age >=18){
//        let result = "dospělý"
//        return result
//    }
//    else if (age <=17){
//        let result = "dítě"
//        return result
//    }
//}
//
//let value = adultChecker(18)
//
//if (value === "dospělý"){
//    console.log("Výsledek kontroly věku: " + value )
//    console.log("Můžes vstoupit")
//}
//else {
//    console.log("Výsledek kontroly věku: " + value)
//    console.log("Nemůžeš vstoupit")
//}
*/


////undefined a null říkají, že chybí hodnota 
//
////undefined v proměné
//
//let age 
//
//if (age === undefined) {
//    console.log("Prosím vyplntě věk")
//}
//else {
//    console.log(age)
//}
//
////undefined jako argument funkce
//
//function mojeFunkce(num){
//    console.log(num)
//
//}
//
//mojeFunkce()
//
////undefined u return
//
//function mojeFunkce2(num){
//    return num
//}
//
//let value = mojeFunkce2()
//console.log(value)
//
//
////Null jako přirozená hodnota
//
//let myAge = 30
//
//myAge = null
//console.log(myAge)



////Funkce s více parametry
//function soucet(a, b, c){
//    return a + b + c
//}
//
//let value = soucet(5, 30, 5)
//console.log(value)
//
////Defaultní (výchozí) hodnota
//function game(name = "Anonymní", score = 0){
//    return "Jméno: " + name + ", Score: " + score
//}
//
//let value2 = game("Marat", 50)
//console.log(value2)


//function tlacitkovyDisplej(prvni=1, druhy=2, treti=3){
//    if (prvni === 1 && druhy ===2 && treti ===3){
//        return "Vaše heslo je správně!"
//    }
//    else {
//        return "Vaše heslo je špatně!"
//    }
//}
//let value = tlacitkovyDisplej(1, 2, 3)
//console.log(value)


//// Template Strings
//
//let myName = "Marat Fedorov"
//let age = 19
//console.log(`Ahoj, já jsem ${myName} a je mi ${age} let.`)
////  `` ==> ENG klavesnice pod ESP 
////  $ ==> ALT GR + ů
////  {} ==> ALT GR + B
//
//function pozdrav(firstName, lastName){
//    console.log(`Ahoj, mé jméno je ${firstName} a moje příjmení je ${lastName}`)
//}
//
//pozdrav("Marat", "Fedorov")


//let firstName = "Harry"
//let lastName = "Potter"
//let age = 15
//let firstfriend = "Ron"
//let secondFriend = "Hermiona"
//
//console.log(`Ahoj, jmenuji se ${firstName} ${lastName} a je mi ${age} let. Moji přátele jsou ${firstfriend} a ${secondFriend}.`)
//
//
//let movie = "Ospalá díra"
//let director = "Tim Burton"
//let award = "nejlepší výkon ve výpravě"
//
//console.log(`Viděl jsem film ${movie}, který režíroval ${director}. Tento film získal ocenění ${award}.`)


////Objekty: vícero informací napr. => Nadpis, obrázek odstavec tak s třemi informacemi se naklada jako s jendím objektem, ve kterém je několik info
//
//let myBook /* Objekt */ = {
//    title: "Harry Potter a kámen mudrců",
//    autor: "J. K. Rowlingova",
//    published: 1997
//}
//
////výpis jednotlivých vlastností
//console.log(myBook.title)
//console.log(myBook.autor)
//console.log(myBook.published)
//
////výpis všech vlastností najednou
//console.log(`${myBook.title} je kniha od ${myBook.autor} a byla vydaná ${myBook.published}`)
//
////změná vlastností objektu
//myBook.title = "Harry Potter a Tajemná komnata"
//myBook.published = 1998
//
//console.log(`${myBook.title} je kniha od autorky ${myBook.autor} a byla vydaná ${myBook.published}`)


//let people = {
//    name: "Marat",
//    city: "Plzeň",
//    age: 19
//}
//
//console.log(`Jmenuje se ${people.name} je mu ${people.age} let a pochází z města ${people.city}.`)
//
//people.name = "David"
//people.city = "Brno"
//people.age = 15
//
//console.log(`Jmenuje se ${people.name} je mu ${people.age} let a pochází z města ${people.city}.`)
//
//people.name = "Kristýna"
//people.city = "Praha"
//people.age = 50
//
//console.log(`Jmenuje se ${people.name} je jí ${people.age} let a pochází z města ${people.city}.`)




//let firstBook /* Objekt */ = {
//    title: "Harry Potter a Kámen mudrců",
//    autor: "J. K. Rowlingova",
//    published: 1997
//}
// 
//
//let secondBook = {
//    title: "Harry Potter a Tajemná komnata",
//    autor: "J. K. Rowlingova",
//    published: 1998
//}
//
//function resultBook(book) {
//    console.log(`Kniha od ${book/*book se nahradí za first nebo secondBook*/.autor} z roku ${book.published} se jmenuje ${book.title}`)
//}
//
//resultBook(firstBook)
//resultBook(secondBook)



//let people1 = {
//    name: "Marat",
//    city: "Plzeň",
//    age: 19,
//    gender: "male"
//}
//let people2 = {
//    name: "David",
//    city: "Brno",
//    age: 15,
//    gender: "male"
//}
//
//let people3 = {
//    name: "Kristýna",
//    city: "Praha",
//    age:50,
//    gender: "female"
//}
//
//
//function peoples(people){
//    if (people.gender === "male"){
//        console.log(`Toto je ${people.name} a žije v ${people.city} a je mu ${people.age} let.`)
//    }
//    else if (people.gender === "female") {
//        console.log(`Toto je ${people.name} a žije v ${people.city} a je ji ${people.age} let.`)
//    }
//
//}
//
//peoples(people1)
//peoples(people2)
//peoples(people3)

////Objekty a proměné
//let firstName = "Marat"
//let myObject = {
//    firstName: firstName,
//    secondName: "Fedorov",
//    age: 19
//}
//
//console.log(myObject.firstName)
//
////Objekty a return
//
//let firstBook = {
//    title: "Harry Potter a Kámen mudrců",
//    author: "J. K. Rowlingová",
//    published: 1997
//}
//
//let secondBook = {
//    title: "Harry Potter a Tajemná komnata",
//    author: "J. K. Rowlingová",
//    published: 1998
//}
//
//function bookInfo(book) {
//    return {
//        basicInfo: `${book.title} od ${book.author}. `,
//        publishing: `Kniha ${book.title} byla vydaná v roce ${book.published}`
//    }
//}
//
//let result = bookInfo(firstBook)
//console.log(result.basicInfo + result.publishing)


////Metody
//let person1 = {
//    firstName: "Marat",
//    secondName: "Fedorov",
//    age: 19,
//    height: 178,
//    salary: 10000,
//    greet: function(friends){
//        console.log(`Ahoj, mám ${friends} přátel. `)
//    },
//    toWork: function(job){
//        return `Jdu do své práce, což je ${job}. `
//    }
//}
//
//console.log(person1.firstName)
//console.log(person1.height)
//person1.greet(5)
//let result = person1.toWork("Programátor")
//console.log(result)


//let school = {
//    type: "gymnázium",
//    street: "Plešnická 15",
//    city: "Pleškov",
//    capacity: 1578,
//
//    schoolOpen: function(){
//        console.log("Škola je otevřená. ")
//    },
//
//    schoolClosed: function(){
//        return "Škola je zavřená."
//    }
//}
//
//console.log(`Chodím do školy ${school.type} a je to v městě ${school.city}.`)
//
//let result = school.schoolOpen()
//let result1 = school.schoolClosed()
//
//school.schoolOpen
//console.log(result1)


//let person1 = {
//    firsName: "Marat",
//    secondName: "Fedorov",
//    age: 19, 
//    greet: function() {
//        console.log(this/* Zastupuje(nahrazuje) danný objekt */.firsName)
//        console.log(this.secondName)
//    }
//}
//
//
//
//let person2 = {
//    firsName: "Harry",
//    secondName: "Potter",
//    age: 15,
//    greet: function() {
//        console.log(this/* Zastupuje(nahrazuje) danný objekt */.firsName)
//        console.log(this.secondName)
//    }
//}
//
//person1.greet()
//person2.greet()




//let vladniNarizeni = false
//
//let school = {
//    type: "gymnázium",
//    street: "Plešnická 15",
//    city: "Pleškov",
//    capacity: 1578,
//
//    schoolOpen: function(){
//        console.log(`Škola ${this.type} ${this.city} je otevřená.`)
//    },
//
//    schoolClosed: function(){
//        return `Škola ${this.type} ${this.city} je zavřená.`
//    }
//}
//
//let result1 = school.schoolClosed()
//
////school.schoolOpen()
////console.log(result1)
//
//if (vladniNarizeni === true) {
//    let result1 = school.schoolClosed()
//    console.log(result1)
//}
//else {
//    school.schoolOpen()
//}



//let firstName = "Marat"
//
//// délka
//console.log(firstName.length/* property nemusí mít () */)
//
////Velká písemena
//console.log(firstName.toUpperCase(/* Metoda potřebuji () */))
//
////MDN String <=== (stránka) řada metod a property
//
////Malá písmená 
//console.log(firstName.toLowerCase())


//let password = "1234admin"
//
//if (password.length > 13) {
//    console.log("Velmi silné heslo!")
//}
//else if (password.length <= 13 && password.length > 8) {
//    console.log("Silné heslo!")
//}
//else {
//    console.log("Slabé heslo!")
//}
//
//if (password.includes("1234")) {
//    console.log("Heslo nesmí obsahovat 1234!")
//}
//else {
//    console.log("Heslo je v pořádku!")
//}


//let number = 3.1438
//
////zaokrouhlování na des. místa
//console.log(number.toFixed(    3    /* zaokrouhluje */))
//
////MDM number <=== stránka 
//
//
////Zaokrouhlování celá čísla
//console.log(Math.round(number))
//console.log(Math.floor(number))/* vždycky dolu */
//console.log(Math.ceil(number))/* Vždycky nahoru */
//
////náhodné číslo!
//
//console.log(Math.ceil(Math.random() * 10 ))
//console.log(Math.ceil(Math.random() * 10 ))
//console.log(Math.ceil(Math.random() * 10 ))
//
//
//// náhodné číslo z intervalu
//
//console.log("TEST")
//let min = 15
//let max = 20
//
//console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//console.log(Math.floor(Math.random() * (max - min + 1)) + min)




//let number1 = Math.ceil(Math.random() * 6)
//let number2 = Math.ceil(Math.random() * 6)
//let number3 = Math.ceil(Math.random() * 6)
//let number4 = Math.ceil(Math.random() * 6)
//let number5 = Math.ceil(Math.random() * 6)
//let number6 = Math.ceil(Math.random() * 6)
//
//let sum = number1 + number2 + number3 + number4 + number5 + number6
//
//console.log(`Součet je: ${sum}.`)
//
//if (sum >= 25){
//    console.log("Vítěz!")
//}
//else {
//    console.log("Zkus znovu své štěstí!")
//}


//// Konstanta a proměné
//const firsName = "Marat" //const předpokláda se že ji nebudeme měnit
////Lepe se čté kód
//console.log(firsName)
//
////Konstanta a objekty
//const person = {
//    age: 19 //S age: můžeme přepisovat 
//}
//
//person.age = 50


////Barvení textu v konzoli
//
//console.log("%c tento text je barevný", 
//    "color: blue; font-weight: bold;")


////Pole a ruzná prace a cykly
//
//let emloyees = ["Marat", "Martin", "Jana"] //list [ALT GR + F]
//
//console.log(emloyees[0])
//console.log(emloyees[1])
//console.log(emloyees[2])
//
////Delká pole
//
//console.log(emloyees.length)
//
//console.log(emloyees[emloyees.length-1])


////random generovani hesla z listu
//let passwords = ["MaratJeGay_", "GabaJeGay_1", "TobiasJeGay_2"]
//
//let randomNumber = Math.ceil(Math.random() * 3)
//
//let index = passwords.length - randomNumber
//
//console.log(passwords[index])



////přepsaní prvku
//let testArray = ["test1", "test2", "test3"]
//testArray[0] = "Nový prvek v poli"
//console.log(testArray)
//
////přidání posledního prvku
//let myArray = ["Jedna", "Dva", "Tři"]
//myArray.push("Čtyři")
//console.log(myArray)
//
////odstranění posledního prvku
//myArray.pop()
//console.log(myArray)
//
////přidání prvního prvku
//myArray.unshift("Nula")
//console.log(myArray)
//
////odstranění prního prvku
//myArray.shift()
//console.log(myArray)


////mdn array -properties a methods
////odstranění z libovolné pozice v listu (poli)
//
//let mySecondArray = ["Jedna", "Dva", "Tři"]
//mySecondArray.splice(0,1) //Vypíše na číslu kde chceme začít (Zační na prvku 1 a odstran 2 prvky pred tebou)
//console.log(mySecondArray)
//
//let myThirdArray = ["Jedna", "Dva", "Čtyři"]
//myThirdArray.splice(2,0, "Tři")// 2 nám říka jaký prvek má vybrat, 0 říka nic nemaž a přidej tři před 
//console.log(myThirdArray)

//let firstName = prompt("Zadej jméno")
//console.log(firstName)

//let myArray = []
//myArray.push(prompt("Přidej jméno"))
//myArray.push(prompt("Přidej jméno"))
//myArray.push(prompt("Přidej jméno"))
//console.log(myArray)
//
//myArray.unshift(prompt("Přidej jméno na začátek"))
//console.log(myArray)
//myArray.unshift(prompt("Přidej jméno na začátek"))
//console.log(myArray)
//myArray.unshift(prompt("Přidej jméno na začátek"))
//console.log(myArray)


//let employees = ["David", "Harry", "Marat", "Gabriel", "Draco"]
//
////employees.forEach/* Cyklus */(function(){
////    console.log("Testujeme")
////})
////
////employees.forEach(function(person){
////    console.log(person)
////})
//
//
//employees.forEach(function(person, index){
//    console.log(index)
//    console.log(person)
//})


////cyklus for
//for(let i =0; i <= 5; i++){
//    console.log(`${i+1}: Testovací text`)
//}
//
////obracený cyklus for
//for(let j = 3; j>= 0; j--){
//    console.log("Další test")
//}
//
////výpis pole pomocí cyklu for
//
//let emloyees = ["David", "Jana", "Martin", "Gabriel", "Simona"]
//
//for(let k = 0; k < emloyees.length; k++){
//    console.log(emloyees[k])
//}


//let emloyees = ["Marat", "Marek", "Jana"]
//
//console.log(emloyees.indexOf("Marek"))
//
//if (emloyees.indexOf("Marat") === -1){
//    console.log("Uživatel nebyl nalezen")
//}
//else{
//    console.log("Uživatel byl nalezen")
//}


//let books = [{
//    tittle: "Harry Potter a kámen mudrců",
//    author: "J. K. Rowlingová",
//    published: 1997
//}, {
//    tittle: "Harry Potter a Tajemná komnata",
//    author: "J. K. Rowlingová",
//    published: 1998
//}, {
//    tittle: "Harry Potter a vězeň z Azkabanu",
//    author: "J. K. Rowlingová",
//    published: 1999
//}]
//
////filtrování na běžném poli 
//
//let names = ["Jana", "Anna", "Naděžda", "David"]
//
//let arrayResults = names.filter(function(oneName){
//    let weTryFind = oneName.toLowerCase().includes("na")
//    return weTryFind 
//})
//console.log(arrayResults)



//Document Object Model => DOM
//Udělá si strukturu kódu (obdelníky atd)

//querySelector ==> vybere první možnost, pokud mám v html dvakrát <p> tak vybere to první co najde
//let heading = document.querySelector("h1")
//console.log(heading)
//let paragraph = document.querySelector("p")
//console.log(paragraph)

//querySelectorAll ==> všechny prvky se vyberou
//let allparagraphs = document.querySelectorAll("p")
//console.log(allparagraphs[0].innerHTML)
//console.log(allparagraphs[1])

////getElementById
//let myID = document.getElementById("Marat").innerHTML
//console.log(myID)
//
////getElementByClassName
//let myClass = document.getElementsByClassName("Gabriel")
//console.log(myClass[0])


//let heading = document.querySelector("h1")
//console.log(heading.textContent)
//console.log(heading.innerText)
//console.log(heading.innerHTML)


//let paragraph = document.querySelectorAll("p")
//
//paragraph.forEach(function(oneParagraph){
//    console.log(oneParagraph.innerHTML)
//})



//let paragraphs = document.querySelectorAll("p");
//
//paragraphs.forEach(function(oneParagraphs){
//    if(oneParagraphs.textContent.toLowerCase().includes("nakrmit")){
//        oneParagraphs.remove()
//    }
//})


// Vytváříme nové html elementy a přidáváme je do stránky:
    /*const newParagraphs = document.createElement("p");
    newParagraphs.textContent ="Text do nového odstavce";
    document.querySelector("header").appendChild(newParagraphs)*/

/*
Vytváříme nové html elementy a přidáváme je do stránky
    const newParagraphs = document.createElement("p");
    newParagraphs.textContent ="Text do nového odstavce";
    document.querySelector("header").appendChild(newParagraphs);

    const newDiv = document.createElement("div");
    document.querySelector("header").appendChild(newDiv);

    const secondParaghraph = document.createElement("p");
    secondParaghraph.textContent = "Test more";
    newDiv.appendChild(secondParaghraph);
*/

/*
 ToDoAppka: tvorba pole objektů a vypsání počtu zbývajících úkolů
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
*/


/*Kliknutí výzva: změň texty odstavcům po kliknutí
    document.querySelector("h1").addEventListener("click", function(event){
    //call back function

        event.target.textContent = "Ahoj, klikl si na mě"
    })

    document.querySelector("h2").addEventListener("click", function(event){
        //call back function
        
            event.target.textContent = "Ahoj, klikl si na mě"
    })


    document.querySelector("h3").addEventListener("click", function(event){
        //call back function
        event.target.textContent = "Ahoj, klikl si na mě"
    })
*/


/*Zachytáváme text v políčku (Event listener change a input)
    let input = document.querySelector("#input-text")

    input.addEventListener("input", function(event){
      console.log(event.target.value)
    })
*/

