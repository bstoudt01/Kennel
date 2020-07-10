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
  }
}