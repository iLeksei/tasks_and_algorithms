const API_BASE_URL = 'https://api.frontendexpert.io/api/fe/testimonials';
let canLoad = true;
let lastMessage = {};
const container = document.getElementById("testimonial-container");

// Write your code here.
async function fetchData(after) {
    try {
        let url = API_BASE_URL + `?limit=5` + `${after ? "&after=" + after : ""}`
        const response = await fetch(url)
        return await response.json();
    } catch (error) {
        console.error(error.stack)
    }
    return null;
}

function renderMessages(data = []) {
    let message = {};
    data.forEach((element, idx) => {
        let newMessage = document.createElement("p");
        newMessage.className = "testimonial";
        newMessage.textContent = element.message;
        container.appendChild(newMessage);
        message = element;
        message.node = newMessage;
    })
    canLoad = true;
    return message;
}


// pre loading
window.addEventListener("DOMContentLoaded", async (e) => {
    let data = await fetchData();
    lastMessage = renderMessages(data.testimonials);
    lastMessage.hasNext = data.hasNext;
})

// on scroll
container.addEventListener("scroll", async (e) => {
    if (lastMessage.hasNext) {
        let scrollHeight = container.scrollHeight - container.scrollTop - container.clientHeight;
        if (scrollHeight - 1 <= 0 && canLoad) {
            canLoad = false;
            let newData = await fetchData(lastMessage.id);
            lastMessage = renderMessages(newData.testimonials);
            lastMessage.hasNext = newData.hasNext;
        }
    }
})