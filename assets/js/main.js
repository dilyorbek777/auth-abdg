let login = document.getElementById("login")
console.log(login);

let result = {}

login.addEventListener("change", (e) => {
    result[e.target.name] = e.target.value
    console.log(result);

})


login.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(result);
    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(result),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
})

