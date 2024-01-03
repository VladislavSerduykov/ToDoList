function getPosts () {
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        method: 'GET',
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
    .then((res) => res.json())
}

const mainApi = {
    getPosts,
}

export default mainApi;