// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
function mOver(){
    let result = document.getElementById("result");
    result.innerHTML = "Welcome to my Heart";
    result.style.backgroundColor = "pink";
    result.style.color = "blue";
}

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
function mOut(){
    let result = document.getElementById("result");
    result.innerHTML = "Don't Leave Me Please";
    result.style.backgroundColor = "black";
    result.style.color = "red";
}