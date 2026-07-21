const addButton = document.getElementById("addButton");

addButton.addEventListener("click", addJSON);
const output = document.querySelector("#output");


function addJSON(){
  console.log('clicked');
  output.innerHTML = "WORKING";
  const url = "https://api.myjson.com/bins/hqys2";
  fetch(url).then(function(response){
    console.log(response.status);
    return response.json()
    
  })
  .then(function(data){
    console.log(data);
    output.innerHTML = "FirstName= " + data.first + "LastName=" + data.last;
    // console.log(JSON.parse(data));
  })
}