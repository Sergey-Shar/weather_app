export function createContent(options, a) {
    return `<div class="weater-window__container">
        <div class="weater-window__header">
            <p class="weater-window__city">${options.name}</p>
            <p class="weater-window__date">${options.country}</p>
        </div>
        <div class="weater-window__main">
          <p class="weater-window__icon">${a}</p>
          <p class="weater-window__icon-title">${options.weather_descriptions}</p>
        </div>
        <div class="weater-window__footer">
            <div class="weater-window__information">
                <div class="weater-window__feelslike">
                    <p class="weater-title">
                    <i class="fas fa-temperature-low"></i>
                    </p>
                    <span id="pressure" class="weater-info">${options.feelslike}&deg;</span>
        </div>
                <div class="weater-window__wind">
                    <p class="weater-title">
                    <i class="fas fa-wind"></i>
                    </p>
                    <span id="wind" class="weater-info">${options.wind_speed} km/h</span>
                </div>
                <div class="weater-window__humidity">
                    <p class="weater-title">
                    <i class="fas fa-tint"></i>
                    </p>
                    <span id="humidity" class="weater-info">${options.humidity}%</span>
                </div>
            </div>
            <div class="weater-window__temperature">
                <span class="weater-window__temperature-text">${options.temperature}&deg;</span>
            </div>
        </div>
    </div>`
}