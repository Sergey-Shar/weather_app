

export function createPopup() {
    return ` <div class="popup">
    <div class="popup__overlay" data-btn="close">
        <div class="popup__body">
            <span class="popup__close" data-btn="close">&times;</span>
            <form class="popup__content" action="/">
                <input id="search" type="text" placeholder="city, country..." class="popup__search" required>
                <button type="submit" class="popup__icon" data-btn="search" ><i class="fas fa-search" data-btn="search" ></i></button>
            </form>
        </div>
    </div>
</div>`
}

