const remoteURL = "http://localhost:5002"

//return the fetcht
//return the result after paring with json (no return written but its still happening since itsneeded to pass the proinse along)
export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },

  getAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  },

  delete(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  
  post(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    }).then(data => data.json())
},

  update(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
},
// returns id property of randomAnimal
getRandomId() {
  return fetch(`${remoteURL}/animals`)
    .then(result => result.json())
    .then(animals => {
      // random function, many ways out there to get random
      const randomIndex = Math.floor(Math.random() * animals.length);
      //look at the id of the reuturning animals, and assign to randomAnimal and return the id of that animal 
      const randomAnimal = animals[randomIndex];
      return randomAnimal.id;
  });
}

}