const BASE_URL = 'https://api.frontendexpert.io/api/fe/glossary-suggestions';

// Write your code here.
const input = document.getElementById("typeahead");
const list = document.getElementById("suggestions-list");
let timeoutId = null;

async function fetchData(url, signal) {
    try {
        const response = await fetch(url)
        return response.json();
    } catch (error) {
        console.error(error.stack);
    }
    return Promise.resolve(null);
}

const renderList = (data = []) => {
    data.forEach( str => {
        let li = document.createElement("li");
        li.textContent = str;
        list.appendChild(li);
    })
}

list.addEventListener("click", (e) => {
    const element = e.target;
    if (element.tagName === "LI") {
        input.value = element.textContent;
        list.innerHTML = "";
    }
})

input.addEventListener("input", (e) => {
    clearTimeout(timeoutId);
    let value = e.target.value;

    if (!value) {
        list.innerHTML = "";
        return;
    }

    timeoutId = setTimeout( async() => {
        const result = await fetchData(BASE_URL + `?text=${value}`);
        if (result.length) {
            list.innerHTML = "";
            renderList(result);
        }
    }, 500)
})