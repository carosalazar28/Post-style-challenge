const share = document.querySelector("#share-botton")
const moreTols = document.querySelector(".socialMedia")

share.addEventListener("click", hideShow)

function hideShow() {
    (moreTols.classList.contains("is-active")) 
        ? moreTols.classList.remove("is-active")
        : moreTols.classList.add("is-active")
}

