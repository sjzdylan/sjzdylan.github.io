/* Task 6 - API call */
function get_all_drinks() {
    console.log("[START] get_all_drinks()");

    const api_endpoint_url = 'http://localhost/DrinksAPI/api/drink/read.php'; // local file

    axios.get(api_endpoint_url).
    then(response => {
        console.log("Axios call completed successfully!");

        let section_results = document.getElementById('results');

        // Build a string of Bootstrap cards
        let result_str = ``;
        let drinks_array = response.data.records; // Array of drink objects
        console.log(drinks_array); // Array of drink objects

        // Task 4 - Display Drinks
        //   Each drink is a Bootstrap card
        // Replace all the hard-coded strings with actual values as read from the JSON file
        for(let drink of drinks_array) {
            result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="http://localhost/DrinksAPI/${drink.photo_url}" 
                             class="card-img-top"
                             alt="Drink Name">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink.category} • ${drink.alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Inject the cards into the #results section
        section_results.innerHTML = result_str;
    }).
    catch(error => {
        console.log(error.message);
        // Task 5 - Data can't be loaded, display alert
        //   "Failed to load drinks data."
        document.getElementById("alerts").innerHTML = "Failed to load drinks data";
    });

    console.log("[END] get_all_drinks()");
}


/* Task 7 - Category Dropdown Menu */
function populate_category_dropdown() {
    console.log("[START] populate_category_dropdown()");

    const api_endpoint_url = 'http://localhost/DrinksAPI/api/drink/category.php'; // API endpoint

    axios.get(api_endpoint_url).
    then(response => {

        console.log("Axios call completed successfully!");

        // YOUR CODE GOES HERE

        let drinks_category = response.data.records;

        for(let category of drinks_category){
            let formcategory = document.getElementById('category');
            let option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            formcategory.appendChild(option);
            
        }
        

    }).
    catch(error => {
        console.log(error.message);
    });

    console.log("[END] populate_category_dropdown()");
}


/* Task 8 - Category Dropdown Event Listener */
function getDrinksbyCategory(category, alcoholic, name){
    const api_endpoint_url = `http://localhost/DrinksAPI/api/drink/search.php?c=${category}&a=${alcoholic}&n=${name}`;
    
    console.log(alcoholic);
    console.log(name);
     axios.get(api_endpoint_url).
    then(response => {
        console.log("Axios call completed successfully!");

        let section_results = document.getElementById('results');

        // Build a string of Bootstrap cards
        let result_str = ``;
        let drinks_array = response.data.records; // Array of drink objects
        console.log(drinks_array); // Array of drink objects

        // Task 4 - Display Drinks
        //   Each drink is a Bootstrap card
        // Replace all the hard-coded strings with actual values as read from the JSON file
        for(let drink of drinks_array) {
            result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="http://localhost/DrinksAPI/${drink.photo_url}" 
                             class="card-img-top"
                             alt="Drink Name">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink.category} • ${drink.alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Inject the cards into the #results section
        section_results.innerHTML = result_str;
    }).
    catch(error => {
        console.log(error.message);
        // Task 5 - Data can't be loaded, display alert
        //   "Failed to load drinks data."
        document.getElementById("alerts").innerHTML = "Failed to load drinks data";
    });

    console.log("[END] get_all_drinks()");
    
}

var drinks_category = document.getElementById("category");
var alcoholic = document.getElementById("alcoholic");
var search_name = document.getElementById("name_search");
drinks_category.addEventListener("change", function(){
    getDrinksbyCategory(drinks_category.value, alcoholic.value, search_name.value);
});

search_name.addEventListener("input",function(){
    getDrinksbyCategory(drinks_category.value, alcoholic.value, search_name.value);
})

alcoholic.addEventListener("change", function(){
    getDrinksbyCategory(drinks_category.value, alcoholic.value, search_name.value);
})



/* Task 9 - Alcoholic Dropdown Event Listener */



/* Task 10 - Name search input Event Listener */





// DO NOT MODIFY THE BELOW LINES
get_all_drinks();
populate_category_dropdown();