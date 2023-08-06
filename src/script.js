const userTab = document.querySelector("[data-userWeather]")
const searchTab = document.querySelector("[data-searchWeather]")
const userContainer = document.querySelector(".weather-container")

const grainAccessContainer = document.querySelector(".grant-location")
const SearchForn = document.querySelector("[data-searchForm]")
const loadingScreen = document.querySelector(".loading-contener")
const userInfoContainer = document.querySelector(".loading-contener")


// initially vairables need???
let currentTab = userTab;
// const API_KEY = "60649d30a1930545707bf2093dace4bf";
currentTab.classList.add("current-tab");

// 

function switchTab(clickedTab) {
    if (clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
        if (!SearchForn.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grainAccessContainer.classList.remove("active");
        } else {
            SearchForn.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFormMemory();
        }
    }
}
// 
userTab.addEventListener("click", () => {
    switchTab(userTab)
})

//
searchTab.addEventListener("click", () => {
    switchTab(searchTab)
})

// check if cordinates are already present in session memory/storage/lockl

function getFormMemory() {
    const localCoordinates = sessionStorage.grtItem("user-coodinates")
    if (!localCoordinates) {
        // agar local coordinates nhi mile to 
        grainAccessContainer.classList.add("active");
    } else {
        const coodinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coodinates);
    }

}

// API CALL

async function fetchUserWeatherInfo(coodinates) {
    const { lat, lon } = coodinates
    // make gratcontainer invisible
    grainAccessContainer.classList.remove("active");
    // make loder visbile
    loadingScreen.classList.add("active");
    // API Call

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=goa`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7b932a9e76msh2c321900cae160fp122b0fjsn347b5e954f7a',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
        // console.log(data);
    } catch (error) {
        loadingScreen.classList.remove("active");
        console.error(error);
    }



    // 
    // try {
    // // // const res = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}`);

    // const data = await res.JSON

    // loadingScreen.classList.remove("active");
    // userInfoContainer.classList.add("active");
    // renderWeatherInfo(data);

    // } catch (error) {
    // loadingScreen.classList.remove("active");
    // console.log("error")
}


function renderWeatherInfo(weatherInfo) {
    // firstly we have to fethc the elements

    const cityName = document.querySelector("[data-cityName]")
    // const countyIcon = document.querySelector("[data-cityName]") 
    const desc = document.querySelector("[data-weatherDesc]")
    //    weather icon
    const temp = document.querySelector("[data-temp]")
    // icon
    const windspeed = document.querySelector("[data-windspeed]")
    const humidity = document.querySelector("[data-humidity]")
    const cloudiness = document.querySelector("[data-cloudiness]")

    // fatch vailus from weather object and put in ui element 

    cityName.innerText = weatherInfo?.city;
    temp.innerText = weatherInfo?.temp;
    windspeed.innerText = weatherInfo?.wind_speed;
    humidity.innerText = weatherInfo?.humidity;
    cloudiness.innerText = weatherInfo?.cloud_pct;
}

// const grainAccessBtn = document.querySelector("[data-grantAccess]")
// grainAccessBtn.addEventListener("click",getloca)
let searchInput = document.querySelector("[data-searchInput]")
SearchForn.addEventListener("submit", (e)=>{
    e.preventDefault();
    let cityName = searchInput.ariaValueMax;
    if(cityName === "") return;
    else{

        fetchSearchInfo(searchInput.value)
    }



})

async function fetchSearchInfo(city){
loadingScreen.classList.add("active")
userInfoContainer.classList.remove("active")
grainAccessContainer.classList.remove("active")

const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7b932a9e76msh2c321900cae160fp122b0fjsn347b5e954f7a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
try {
    const response = await fetch(url, options);
    const data = await response.json();
   loadingScreen.classList.remove("active")
   userInfoContainer.classList.add("active")
renderWeatherInfo(data)   
   
    // console.log(data);
} catch (error) {
    
    console.error(error);
}


}












