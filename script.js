function highlight() {
    //Write your code here
    let text = document.querySelectorAll("strong");
    for(let t of text){
        t.style.color = "green";
    }

}


function return_normal() {
    //Write your code here
    let text = document.querySelectorAll("strong");
    for(let t of text){
        t.style.color = "black";
    }
    
}
