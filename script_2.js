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
//    age: 19
//}
//let people2 = {
//    name: "David",
//    city: "Brno",
//    age: 15
//}
//
//let people3 = {
//    name: "Kristýna",
//    city: "Praha",
//    age:50
//}
//
//
//function peoples(people){
//    console.log(`Toto je ${people.name} a žije v ${people.city} a je mu/ji ${people.age} let.`)
//}
//
//peoples(people1)
//peoples(people2)
//peoples(people3)