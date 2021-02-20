const form = document.querySelector("form")

form.addEventListener("submit", function(event){
    if(event.tagName === "BUTTON"){
        let newDiv = document.createElement("div")

        form.appendChild(newDiv)
    }
})