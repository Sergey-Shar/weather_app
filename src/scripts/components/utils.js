import {createPopup} from "./popup.js";
import {getData} from "./get-request.js";
import { createContent} from "./weather-window.js";


const currentTime = document.querySelector('.header__time')
const wrapper = document.querySelector('.wrapper')
const content = document.querySelector(".weater-window")

function insertPopupToHtml() {
    const popup = createPopup()
    document.body.insertAdjacentHTML("beforeend", popup);
}

export function openPopup() {
    insertPopupToHtml()
    const popup = document.querySelector('.popup')
    setTimeout(() => {
        addClassname(popup, 'open')
    }, 300)
}

export function closePopup() {
    const popup = document.querySelector('.popup')
    setTimeout(() => {
        removeClassName(popup, 'open')
    }, 300)
    destroyItem(popup)

}

export function addClassname(item, name) {
    item.classList.add(name)
}

export function renderIcons(options, icon) {
    const weather = createContent(options, icon)
    content.innerHTML = weather
}

export function removeClassName(item, name) {
    item.classList.remove(name)
}

function destroyItem(item) {
    setTimeout(() => {
        item.parentNode.removeChild(item)
    }, 600)
}

function search(input) {
    getData(input.value)
    closePopup()
}

export function validation(event) {
    const input = document.getElementById('search')
    if (input.value === '' || input.value === null) {
        return null
    } else {
        search(input)
        event.preventDefault()
    }
}

export function checkDayOrNight(item) {
    if (item === 'no') {
        addClassname(wrapper, 'night')
    } else {
        removeClassName(wrapper, 'night')
    }
}

export function renderCurentData(date) {
    currentTime.innerText = date
}
