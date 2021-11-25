import {checkDayOrNight,renderIcons} from "./utils.js";
import {icons} from "./icons.js";
import {KEY} from "./key.js"

export const getData = (name) => {
    fetch(`${KEY}&query=${name}`)
        .then(respons => respons.json())
        .then(data => {
            const copy = Object.assign(data.current, data.location)
            const nigthDay = copy.is_day
            const discription = copy.weather_descriptions
            if (discription[0] === `Partly cloudy` && nigthDay === 'no') {
                renderIcons(copy, icons.partlyCloudyNight)
            } else if (discription[0] === `Partly cloudy` && nigthDay === 'yes') {
                renderIcons(copy, icons.partlyCloudyDay)
            } else if (discription[0] === `Sunny`) {
                renderIcons(copy, icons.sunny)
            } else if (discription[0] === `Cloud`) {
                renderIcons(copy, icons.cloud)
            } else if (discription[0] === `Clear`) {
                renderIcons(copy, icons.clear)
            } else if (discription[0] === `Rain` || `Light Rain` || 'Rain Shower') {
                renderIcons(copy, icons.rain)
            } else if (discription[0] === `Snow` || discription[0] === `Heavy snow` || 'Light Snow Shower' || 'Light Snow Shower, Heavy Snow Shower' || 'Light Snow Shower, Snow Shower') {
                renderIcons(copy, icons.snow)
            } else if (discription[0] === `Mist` || discription[0] === `Drizzle mist` || `Patches Of Fog`) {
                renderIcons(copy, icons.mist)
            } else if (discription[0] === `Overcast`) {
                renderIcons(copy, icons.overCast)
            } else {
                renderIcons(copy, icons.defaultIcon)
            }
            checkDayOrNight(nigthDay)
        })
        .catch(err => {
            console.log(err)
        })
}
