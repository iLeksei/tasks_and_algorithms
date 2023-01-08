// Write your code here.
const message = document.getElementById("message-content");
const duration = document.getElementById("duration");
const cancelable = document.getElementById("cancelable");
const success = document.getElementById("success");
const error = document.getElementById("error");

const addBtn = document.getElementById("add-button");
const clearBtn = document.getElementById("clear-button");

const toasts = document.getElementById("toasts");

const DEFAULT_DURATION_MS = 500;

function getToastHtml(text) {
    const div = document.createElement("div");
    div.classList.add("toast");
    div.classList.add(success.checked ? "success-toast" : "error-toast");

    const p = document.createElement("p");
    p.classList.add("message");
    p.textContent = text ? text :
        success.checked ? "Success!" : "Error.";
    div.appendChild(p);

    if (cancelable.checked) {
        const button = document.createElement("button");
        button.classList.add("cancel-button");
        button.textContent = "X";
        div.appendChild(button);
    }

    return div;
}

addBtn.addEventListener("click", (e) => {
    let newToast = getToastHtml(message.value);
    toasts.prepend(newToast);
    setTimeout(() => {
        newToast.remove();
    }, duration.value < DEFAULT_DURATION_MS ? DEFAULT_DURATION_MS : duration.value)
})

toasts.onclick = (e) => e.target.tagName !== "BUTTON" ? "" : toasts.removeChild(e.target.parentNode);
clearBtn.onclick = () => toasts.innerHTML = "";