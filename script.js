function mOver(obj){
    //change to new style
    obj.innerHTML = "WTH";
    obj.classList.add("btn-danger");
    obj.classList.remove("btn-primary");
}

function mOut(obj){
    //reset back to default
    obj.innerHTML = "HOVER HERE";
    obj.classList.remove("btn-danger")
    obj.classList.add("btn-primary");
}
