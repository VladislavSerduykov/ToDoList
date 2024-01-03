export function getPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        headers: {
            "Content-type":"application/json; charset=UTF-8"
        }
    })
}