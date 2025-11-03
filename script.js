//Classe User
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  //Comparazione età
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}
const user1 = new User("Mario", "Rossi", 30, "Roma");
const user2 = new User("Luca", "Bianchi", 25, "Milano");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));

//Pets
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}
const pets = [];

function addPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets, push(newPet);

  const list = document.getElementById("petList");
  const li = document.createElement("li");
  li.textContent = `${newPet.petName} (${newPet.species}, ${newPet.breed}) - Padrone: ${newPet.ownerName}`;
  list.appendChild(li);

  document.getElementById("petForm").reset();

  if (pets.length >= 2) {
    const lastPet = pets[pets.length - 1];
    for (let i = 0; i < pets.length - 1; i++) {
      if (lastPet.sameOwner(pets[i])) {
        alert(
          `${lastPet.petName} e ${pets[i].petName} hanno lo stesso padrone (${lastPet.ownerName})!`
        );
      }
    }
  }
}
