fetch(location.origin + "/footer.html")
.then(resp => resp.text())
.then(html => {
    document.getElementById("body").insertAdjacentHTML("afterend", html)
})