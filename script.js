const Person = function(first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = function (){
    return firstName
  }
  this.getLastName = function (){
    return lastName
  }
  this.getFullName = function (){
    return firstName + " " + lastName
  }

  this.setFirstName = function(newFirst){
    firstName = newFirst
  }
  this.setLastName = function(newLast){
    lastName = newLast
  }
  this.setFullName = function(newFirst,newLast){
    firstName = newFirst
    lastName = newLast
  }
};