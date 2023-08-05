const userTab = document.querySelector("[data-userWeather]")
const searchTab = document.querySelector("[data-searchWeather]")
const userContainer = document.querySelector(".weather-container")

const grainAccessContainer =document.querySelector(".grant-location")
const SearchForn = document.querySelector("[data-searchForm]")
const loadingScreen = document.querySelector(".loading-contener")
const userInfoContainer = document.querySelector(".loading-contener")


// initially vairables need???
let currentTab = userTab;
const API_KEY = "";
currentTab.classList.add("current-tab");

// 

 function switchTab (clickedTab)  {
  if(clickedTab != currentTab){
    currentTab.classList.remove("current-tab");
    currentTab = clickedTab;
    currentTab.classList.add("current-tab");
    if(!SearchForn.classList.contains("active")){
        userInfoContainer.classList.remove("active");
        grainAccessContainer.classList.remove("active");
    }else{
        SearchForn.classList.remove("active");
        userInfoContainer.classList.remove("active");
        getFormMemory();
    }
  }
}
// 
userTab.addEventListener("click",() => {
    switchTab(userTab)
})

//
searchTab.addEventListener("click",() => {
    switchTab(searchTab)
})

// check if cordinates are already present in session memory/storage/lockl

function getFormMemory(){

}