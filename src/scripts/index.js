import { getData } from "./components/get-request.js"
import { onClickBtn, onClosePopup } from "./components/event-handler.js"

document.addEventListener('DOMContentLoaded', app)
document.addEventListener('click', onClickBtn)
document.addEventListener('keydown', onClosePopup)

function app() {
    getData(`fetch:ip`)
}