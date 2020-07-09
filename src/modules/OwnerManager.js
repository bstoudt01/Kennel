const remoteURL = "http://localhost:5002"

//fetch request for single object based on {id} 
//fetch request of entire array of objects
export default {
    get(id) {
        return fetch(`${remoteURL}/owners/${id}`).then( result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/owners`).then(result => result.json())
    }
}