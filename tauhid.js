const inputBox = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")
const addButton = document.querySelector("#add-button")

console.log(inputBox)

addButton.addEventListener("click", (event) => {
    if (inputBox.value === "") {
        alert("Please write somthing...")
    }
    else {
        let item = document.createElement("li")
        item.innerHTML = inputBox.value
        listContainer.appendChild(item)
        let cross = document.createElement("span")
        cross.innerHTML = "\u00d7"
        item.appendChild(cross)
    }
    inputBox.value = ""
    console.log(listContainer)
    saveData()
})


listContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
        saveData()
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove()
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData () {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData()

