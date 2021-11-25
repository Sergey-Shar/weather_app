
import { openPopup, closePopup, validation } from "./utils.js"

export function onClickBtn(event) {
    const btnTarget = event.target.dataset.btn;
    if (btnTarget === 'popup') {
        openPopup()
    } else if (btnTarget === 'close') {
        closePopup()
    } else if (btnTarget === 'search') {
        validation(event)
    }
}

export function onClosePopup(event) {
    if (event.code === "Escape") {
        closePopup()
    }
}

