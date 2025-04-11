let inputCity = document.querySelector("#inputCity");
let check = document.querySelector("#check");
let ans = document.getElementById("weather-ans");

check.addEventListener("click" , ()=> {
    let key = "18f47ff275a726c1f459b0d5f747ef0b"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&units=metric&appid=${key}`

    fetch(URL)
        .then((res) => {
            return res.json()
        }).then((res) => {
            ans.innerHTML =  `${res.main.temp } <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" alt="">`;
        })
})