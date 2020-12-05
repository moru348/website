fetch("https://api.github.com/users/moru348/repos?per_page=20")
.then(resp => resp.json())
.then(html => {
    document.getElementById("body").insertAdjacentHTML("afterend", html)
})