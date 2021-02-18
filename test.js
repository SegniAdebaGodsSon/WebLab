function a(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
        })
}
a()