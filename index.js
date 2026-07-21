document.getElementById("addButton").addEventListener("click", addToStorage);
document.getElementById("seeButton").addEventListener("click", viewStorage);
const people = JSON.parse(localStorage.getItem('tester1')) || {first:"none", last:"none"};
console.log(people);

function addToStorage() {
  let tempFirst = document.getElementById("firstName").value;
  let tempLast = document.getElementById("lastName").value;
  let myObj = { first: tempFirst, last: tempLast };

  localStorage.setItem("tester1", JSON.stringify(myObj));
}

function viewStorage() {
  let tempHolder = localStorage.getItem("tester1") || people;
  console.log(tempHolder);
}
