let check = document.querySelector("#check");
let temp = document.getElementById("temp");
let icon = document.getElementById("icon");
let weatherDesc = document.getElementById("weatherDesc");
let loc = document.getElementById("location");
let feelsLike = document.getElementById("feelsLike");
let humidity = document.getElementById("humidity");


check.addEventListener("click" , ()=> {
    let cityName = document.querySelector("#cityName").value;
    let cityKey = "18f47ff275a726c1f459b0d5f747ef0b"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${cityKey}`

    fetch(URL)
        .then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res);
            temp.innerHTML = `${res.main.temp}&#8451;`;
            icon.src = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
            console.log(icon);
            weatherDesc.innerHTML = res.weather[0].description;
            loc.innerHTML = res.name;
            feelsLike.innerHTML = `${res.main.feels_like}&#8451;`;
            humidity.innerHTML = `${res.main.humidity}%`;
            console.log(res);
            
        })
})
