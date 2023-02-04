export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal-wrapper h2"),
    buttonClose: document.querySelector(".modal-wrapper .close"),

    open(message) {
        Modal.message.innerText = message
        Modal.wrapper.classList.add("open")
    },
    close() {
        Modal.wrapper.classList.remove("open")
    },
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
    if (event.key == "Escape") Modal.close()
}
