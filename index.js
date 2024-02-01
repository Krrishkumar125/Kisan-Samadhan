let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let climate = document.querySelector('#cloud')
let weather= document.querySelector("#weather");
closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});
searchBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); 
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}
climate.addEventListener("click",()=>{
    weather.classList.remove("hidden");
})


const apiKey = "4805af8611086d17d23d031c02e39679";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function  checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".climate").style.display="none";
    }else{
        var data = await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="pictures/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src="pictures/clear.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="pictures/drizzle.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src="pictures/rain.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src="pictures/mist.png"
    }
     document.querySelector(".climate").style.display="block";
     document.querySelector(".card").style.height="100vh";
     document.querySelector(".error").style.display="none";
}
    }
searchButn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
