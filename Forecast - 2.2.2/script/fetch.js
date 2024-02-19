//data is the variable that will store all the data that is fetched from the API
let data = null;


//forecast stores forecast data 
let forecast = null;

//The longitude and latitude of the user's location
let position = null;

//A list of all the HTML elements that will be modified
let loc = document.getElementById("location");
let temperature = document.getElementById("temperature");
let weatherImg = document.getElementById("weather-img");
let aqiNum = document.getElementById("aqi-num");
let updated = document.getElementById("updated");
let airCon2 = document.getElementsByClassName("air-con2")[0];
let aqiText = document.getElementById("aqi-text");

//Forecast elements
let fDate = document.getElementsByClassName("f-date");
let fPollution = document.getElementsByClassName("f-pollution");
let fTemp = document.getElementsByClassName("f-temp");
let fImg = document.getElementsByClassName("f-img");
let fwind = document.getElementsByClassName("f-wind");
let day = document.getElementsByClassName("day");

//Modal elements
let modal = document.getElementsByClassName("modal")[0];
let bad = document.getElementsByClassName("bad")[0];
let good = document.getElementsByClassName("good")[0];
let moderate = document.getElementsByClassName("moderate")[0];



//Function to convert the level of pollution to what the user will understand
function indexConvert(index){
    if(index > 0 && index < 4){
        return {
            status: "Good",
            text: "Low",
            color: "#008000"
        }
    }else if(index > 3 && index < 7){
        return{
            status: "Moderate",
            text:"Moderate",
            color: "#c59640"
        }
    }else if(index > 6 && index < 10){
        return{
            status: "Unhealthy",
            text: "High",
            color: "#EE4343"
        }
    }else{
        return{
            status: "Dangerous",
            text: "Very High",
            color: "#EE4343"
        }
    }
}


//Used to handle error if the fetch is not made the first time
function errorCheck(){
    setTimeout(()=>{
        if(temperature.innerText == ""){
            alert("Slow internet connection detected. Please reload the page");
        }
    }, 5000)
}


//Get the user's location and convert it to a value that dan be used by the api

function getLocation() {
    const successCallback = (resp) => {
        //Get the location
        position = resp.coords.latitude + " " + resp.coords.longitude;

        // Code to fetch forecast
        function _0x6ef3(){var _0xe7a2f8=['1128591GXJgpO','334164MykCOz','10997GZEHuu','1362080tObURX','16YDywDV','170532WDweXO','&days=3&aqi=yes&alerts=yes','json','552yxnyXZ','30DKFRqy','334594rSNCGH','then','50330QHFbzW'];_0x6ef3=function(){return _0xe7a2f8;};return _0x6ef3();}var _0x4abd54=_0x1882;function _0x1882(_0x264a52,_0x54b787){var _0x6ef38c=_0x6ef3();return _0x1882=function(_0x18825c,_0x3c5446){_0x18825c=_0x18825c-0x167;var _0x3b8279=_0x6ef38c[_0x18825c];return _0x3b8279;},_0x1882(_0x264a52,_0x54b787);}(function(_0x5b7e17,_0x19766b){var _0x522214=_0x1882,_0x395e47=_0x5b7e17();while(!![]){try{var _0x351878=parseInt(_0x522214(0x167))/0x1+parseInt(_0x522214(0x172))/0x2+-parseInt(_0x522214(0x16d))/0x3*(parseInt(_0x522214(0x16c))/0x4)+-parseInt(_0x522214(0x16b))/0x5+-parseInt(_0x522214(0x169))/0x6+-parseInt(_0x522214(0x16a))/0x7*(-parseInt(_0x522214(0x170))/0x8)+-parseInt(_0x522214(0x168))/0x9*(-parseInt(_0x522214(0x171))/0xa);if(_0x351878===_0x19766b)break;else _0x395e47['push'](_0x395e47['shift']());}catch(_0x5d280b){_0x395e47['push'](_0x395e47['shift']());}}}(_0x6ef3,0x23d31),fetch('http://api.weatherapi.com/v1/forecast.json?key=d94b49b992d34389a6594145243001&q='+position+_0x4abd54(0x16e))[_0x4abd54(0x173)](_0x4bc26d=>_0x4bc26d[_0x4abd54(0x16f)]())[_0x4abd54(0x173)](_0x847b44=>forecast=_0x847b44));

        // fetch('http://api.weatherapi.com/v1/forecast.json?key=d94b49b992d34389a6594145243001&q=' + "Hong kong" + "&days=3&aqi=yes&alerts=yes")
        // .then(_0x4bc26d => _0x4bc26d.json())
        // .then(_0x847b44 => forecast = _0x847b44);

        //Code to fetch data
        function _0x2b1c(_0x1f9984,_0xa1f0c6){var _0x395149=_0x3951();return _0x2b1c=function(_0x2b1cdc,_0x481aa3){_0x2b1cdc=_0x2b1cdc-0x10d;var _0x1142c6=_0x395149[_0x2b1cdc];return _0x1142c6;},_0x2b1c(_0x1f9984,_0xa1f0c6);}var _0x263b27=_0x2b1c;(function(_0x4cacba,_0x1a015a){var _0x560415=_0x2b1c,_0x413429=_0x4cacba();while(!![]){try{var _0x3c6b32=parseInt(_0x560415(0x116))/0x1*(-parseInt(_0x560415(0x110))/0x2)+parseInt(_0x560415(0x114))/0x3+parseInt(_0x560415(0x10e))/0x4+-parseInt(_0x560415(0x10f))/0x5*(parseInt(_0x560415(0x119))/0x6)+-parseInt(_0x560415(0x115))/0x7*(-parseInt(_0x560415(0x117))/0x8)+parseInt(_0x560415(0x112))/0x9+parseInt(_0x560415(0x10d))/0xa;if(_0x3c6b32===_0x1a015a)break;else _0x413429['push'](_0x413429['shift']());}catch(_0x5e7728){_0x413429['push'](_0x413429['shift']());}}}(_0x3951,0xd7d65),fetch(_0x263b27(0x118)+position+_0x263b27(0x111))[_0x263b27(0x113)](_0x5499ec=>_0x5499ec[_0x263b27(0x11a)]())['then'](_0x1af567=>data=_0x1af567));function _0x3951(){var _0x24bcdb=['70454lvNwvk','&aqi=yes','125289QQBQlL','then','2328273znwKlb','14TrPQlF','39pddUOB','522344VPFLoM','http://api.weatherapi.com/v1/current.json?key=d94b49b992d34389a6594145243001&q=','450906DZaKus','json','21174480hhBtXT','3192188vVYZbH','105wukCFw'];_0x3951=function(){return _0x24bcdb;};return _0x3951();}

        // fetch("http://api.weatherapi.com/v1/current.json?key=d94b49b992d34389a6594145243001&q=" + "Hong kong" + "&aqi=yes")
        // .then(_0x5499ec => _0x5499ec.json())
        // .then(_0x1af567 => data = _0x1af567);

        setTimeout(()=>{
            //Get today's data and display it to the user
            loc.innerText = data.location.name;
            temperature.innerText = data.current.temp_c + "°C";
            updated.innerText = "Updated | " + data.current.last_updated;
            aqiNum.innerText = data.current.air_quality["gb-defra-index"];
            airCon2.style.backgroundColor = indexConvert(data.current.air_quality["gb-defra-index"]).color
            weatherImg.src = 'https:' + data.current.condition.icon;
            
            //Get the forecast data and display it
            let dateIndex = 0;
            console.log(forecast)
            for(let x of forecast.forecast.forecastday){
                day[dateIndex].style.backgroundColor = indexConvert(forecast.forecast.forecastday[dateIndex].day.air_quality["gb-defra-index"]).color
                fDate[dateIndex].innerText = forecast.forecast.forecastday[dateIndex].date;
                fPollution[dateIndex].innerText = indexConvert(forecast.forecast.forecastday[dateIndex].day.air_quality["gb-defra-index"]).text;
                aqiText.innerText = indexConvert(forecast.forecast.forecastday[dateIndex].day.air_quality["gb-defra-index"]).status;
                fTemp[dateIndex].innerText = forecast.forecast.forecastday[dateIndex].day.avgtemp_c + "°C";
                fImg[dateIndex].src = "https:" +  forecast.forecast.forecastday[dateIndex].day.condition.icon;
                fwind[dateIndex].innerText = forecast.forecast.forecastday[dateIndex].day.maxwind_kph + "km/h"
                dateIndex++;
            };
            
            const errorCallback = (error) => {
            console.log(error);
            };
              
        }, 1000)
      };
      
      const errorCallback = (error) => {
        alert("Location needed for forecast, Please allow and reload page")
        console.log(error);
      };
      
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }




//All the DOM manipulation will be done in the setTimeout, this is to ensure that 
//application works regardless of the internet connection

getLocation();

//Used to display the modal
function showModal(){
    modal.style.display = "flex";
    showMsg();
}

//Used to hide the modal and any messaged it displayed
function hideModal(){
    modal.style.display = "none";
    good.classList.remove("show");
    moderate.classList.remove("show");
    bad.classList.remove("show");
}

function showMsg(){
    console.log(airCon2.style.backgroundColor)
    if(aqiText.innerText == "Good"){
        good.classList.add("show");
    }else if(aqiText.innerText == "Moderate"){
        moderate.classList.add("show");
    }else{
        bad.classList.add("show");
    }
}

//ALL MODAL FUNCTIONS


