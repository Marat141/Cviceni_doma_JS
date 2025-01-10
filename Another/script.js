let criminals = [
    {
        firstName: 'Filip',
        lastName: 'Šetek',
        birthYear: 1985,
        licencePlate: '85AC2488',
        address: 'U sloupů 8',
        city: 'Kořínkov'
    }, 
    {
        firstName: 'Adam',
        lastName: 'Veliký',
        birthYear: 1973,
        licencePlate: '5PA2547',
        address: 'U kolouzků 19',
        city: 'Plzeň'
    }, 
    {
        firstName: 'Martina',
        lastName: 'Volová',
        birthYear: 1956,
        licencePlate: '2OI8998',
        address: 'Ptáčková 28',
        city: 'Praha'
}];

//Uložíme data z pole
let filter = {
    searchText: ""
}

//Filtr
const renderCriminals = function(ourCriminals, tryToFind){
    let arrayResult = ourCriminals.filter(function(oneSuspect){
        return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
    })

    console.log(arrayResult);
};


//Načtení dat z pole

let licencePlate = document.querySelector("#licence-plate");

licencePlate.addEventListener("input", function(event){
    filter.searchText = event.target.value
    renderCriminals(criminals, filter)
});