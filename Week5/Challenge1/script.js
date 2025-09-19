const weather_type_images = {
    "Clear": "images/clear.jpg",
    "Clouds": "images/clouds.jpg",
    "Haze": "images/haze.jpg",
    "Mist": "images/mist.jpg",
    "Rain": "images/rain.jpg",
    "Smoke": "images/smoke.jpg",
    "Snow": "images/snow.jpg",
    "Thunderstorm": "images/thunderstorm.jpg"
};

const temp_images = {
    "Hot": "images/hot.jpg",   // Celsius > 25
    "Okay": "images/okay.jpg", // Celsius 5-25
    "Cold": "images/cold.jpg"  // Celsius < 5
};


// DO NOT CHANGE THE FUNCTION SIGNATURE
function check_weather() {

    console.log("=== [START] check_weather() ===");

    //============================================================================
    // Task 1
    // Key in your own OpenWeatherMap.org API key (DO NOT SHARE IT WITH OTHERS)
    //============================================================================
    const weather_api_key = '086609b094beaecbb2ec442cf128d64b';


    //============================================================================
    // Task 2
    // Retrieve the user input (city name) from <input>
    //============================================================================
    let input_value = document.getElementById("city");
    const city = `${input_value.value}`; // Default value, you need to replace this string with actual user input


    // DO NOT MODIFY THIS
    let api_endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=metric`;
    console.log(api_endpoint);

    axios.get(api_endpoint)
    .then(response => {
        // Inspect what's in the API response
        console.log(response.data);
        
        //============================================================================
        // Task 3
        // Retrieve the weather info (e.g. Rain, Clouds, etc.)
        //============================================================================
        
        // YOUR CODE GOES HERE
        // Make use of const weather_type_images (at the top)
        let weather_form = document.getElementById("weather_images");
        let imgs = weather_form.getElementsByTagName("img");

        for(i=0; i<response.data.weather.length; i++){
            let weathertype = response.data.weather[i].main;
            imgs[i].src = weather_type_images[weathertype] || "images/default.jpg"; 
        }

        let tempimg = document.getElementById("temperature_image");

        let temp = response.data.main.temp;
        console.log(temp);  
        var temp_img = "";
        if(temp > 25){
            temp_img = temp_images["Hot"];
        }
        else if(temp >= 5 && temp < 25){
            temp_img = temp_images["Okay"];
        }
        else{
            temp_img = temp_images["Cold"];
        }
        tempimg.src = temp_img;
        //======================================================================================
        // Task 4
        // Perform JavaScript DOM to reflect weather info and temperature info in the HTML page.
        //======================================================================================

        // YOUR CODE GOES HERE
        // Make use of const temp_images (at the top)
        
    })
    .catch(error => {
        console.log(error.message);
    })
    
    console.log("=== [END] check_weather() ===");
}

