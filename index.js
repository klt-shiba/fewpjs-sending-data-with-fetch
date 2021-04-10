let configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: "Steve",
      email: "steve@steve.com"
    })
  };
// let body = document


// Add your code here
function submitData(name, email) {
  return  fetch('http://localhost:3000/users', configurationObject)
    .then(function(response) {
      return response.json();
  })
  .then(function(json) {
    json.name = name;
    json.email = email;
    let div = document.createElement('P');
    let text = document.createTextNode(`${json.id}`); 
    let userID = div.appendChild(text);
    let stringID = (json.id).toString();
    console.log(json);
    return document.body.innerHTML = `${stringID}`
    // return document.body.append(userID);
  })
  .catch(function(error) {
    let errorMessage = error.message
    let div = document.createElement('P');
    let text = document.createTextNode(`${errorMessage}`); 
    let userID = div.appendChild(text);
    let stringID = (userID).toString();
    return document.body.innerHTML = `${errorMessage}`
    // return document.getElementById("body").appendChild(userID);
  })
}
