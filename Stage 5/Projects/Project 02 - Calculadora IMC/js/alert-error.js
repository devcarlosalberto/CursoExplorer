export const AlertError = {
    element: document.querySelector(".alert-error"),

    open() {
        AlertError.element.classList.add("open")
    },
    close() {
        AlertError.element.classList.remove("open")
    },
    onWriteInFieldsDeleteAlert(fields) {
        for (let field of fields) {
            field.oninput = () => AlertError.close()
        }
    },
}
