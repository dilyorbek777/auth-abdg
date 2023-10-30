let signup = document.getElementById("signup")

let resup = {}

signup.addEventListener("change", (e) => {
    resup[e.target.name] = e.target.value
    console.log(resup);

})

signup.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(resup);
    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(resup),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
})