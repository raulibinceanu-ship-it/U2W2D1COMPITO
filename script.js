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
