let responseStr = fetch("https://jsonplaceholder.typicode.com/posts");

let serhVal = document.getElementById("serhVal")
let submitBtn = document.getElementById("submitBtn")
let locationBtn = document.getElementById("locationBtn")

let weatherSec = document.getElementById("weatherSec")
let locId = document.getElementById("locId")
let tempId = document.getElementById("tempId")
let currTime = document.getElementById("currTime")
let timeId = document.getElementById("timeId")
let dayType = document.getElementById("dayType")

const responseFn = async () =>{
    let fnresponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(fnresponse);
}

const wthrApi = async(loc) => {
    let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=9a758e99e6564bc3b0a91615241602&q=${loc}&aqi=no`)
    return await data.json()
}


//Whether result based on manual search
submitBtn.addEventListener('click', async () => {
    const value = serhVal.value;
    const apiResponse = await wthrApi(value)
    //console.log(apiResponse)
    locId.innerText = `${apiResponse.location.name} - ${apiResponse.location.region} - ${apiResponse.location.country}`
    getTime()
    tempId.innerText = "Temperature : " + apiResponse.current.feelslike_c + "'C or " + apiResponse.current.feelslike_f + "'F "
    dayType.innerText = "day condition: " + apiResponse.current.condition.text
    const urlStr = `https://source.unsplash.com/weekly?${apiResponse.current.condition.text}`
    weatherSec.style.backgroundImage = `url(${urlStr})`
    timeId.innerText = "last updated: " + apiResponse.current.last_updated 
})

//Whether result automatically fetched by GPS
async function locationSuccess(loc){
    const coordinates = `${loc.coords.latitude},${loc.coords.longitude}`
    const apiResponse = await wthrApi(coordinates)
    locId.innerText = `${apiResponse.location.name} - ${apiResponse.location.region} - ${apiResponse.location.country}`
    getTime()
    tempId.innerText = "Temperature : " + apiResponse.current.feelslike_c + "'C or " + apiResponse.current.feelslike_f + "'F "
    dayType.innerText = "day condition: " + apiResponse.current.condition.text
    const urlStr = `https://source.unsplash.com/weekly?${apiResponse.current.condition.text}`
    weatherSec.style.backgroundImage = `url(${urlStr})`
    //`https://source.unsplash.com/weekly?water
    timeId.innerText = "last updated: " + apiResponse.current.last_updated
}

function locationFailure(){
    console.log('There was an error in fetching location.')
}

locationBtn.addEventListener('click', async function(){
    //const locatn = navigator.geolocation.getCurrentPosition(locationSuccess,locationFailure)
    navigator.geolocation.getCurrentPosition(locationSuccess,locationFailure)
})

function getTime(){
    const timeNow = new Date()
    const timeStr = `Date: ${timeNow.getDate()}/${timeNow.getMonth()+1}/${timeNow.getFullYear()} - ${timeNow.getHours()}:${timeNow.getMinutes()}`
    currTime.innerText = timeStr

}
setInterval(getTime, 15000)
