class Utente {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastname = _lastName;
    this.age = _age;
    this.location = _location;
  }

  confronto(secondo) {
    if(this.age < secondo.age) {
        console.log(`${this.firstName} è piu vecchio`)
    } else {
        console.log(`${secondo.firstName} è piu vecchio`)
    }
  }
}


let ivana = new Utente("Ivana", "martoriata", 7, "luna");
let marcello = new Utente("Marcello", "lol", 4, "sole");

console.log(ivana.confronto(marcello))


