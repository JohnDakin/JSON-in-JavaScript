const addButton = document.getElementById("addButton");

addButton.addEventListener("click", addJSON);
const output = document.querySelector("#output");


function addJSON(){
  console.log('clicked');
  output.innerHTML = "WORKING";
  const url = "https://dummyjson.com/users/20";
  fetch(url).then(function(response){
    console.log(response.status);
    return response.json()
    
  })
  .then(function(data){
    console.log(data);
    output.innerHTML = "FirstName= " + data.firstName + " LastName=" + data.lastName;
    // console.log(JSON.parse(data));
  })
}