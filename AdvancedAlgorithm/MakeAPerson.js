// JavaScript File

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  var firstName, lastName;
  firstAndLast = firstAndLast.split(' ');
  firstName = firstAndLast[0];
  lastName = firstAndLast[1];
    
    this.getFirstName = function() {
      return firstName;
    };
    this.getLastName = function() {
      return lastName;
    };
    this.getFullName = function() {
      return firstName + " " + lastName;
    };
    this.setFirstName = function(first) {
      firstName = first;
    };
    this.setLastName = function(last) {
      lastName = last;
    };
   this.setFullName = function(firstAndLast) {     // We place this logic in the setFullName method
        firstAndLast = firstAndLast.split(' ');
        firstName = firstAndLast[0];
        lastName = firstAndLast[1];
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();