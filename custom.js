const numbers = [10, 20, 30, 40,50];

numbers.forEach((ele, ind) =>{

console.log(ele, ind);

});




function greet() {
    document.querySelectorAll(".testing").forEach(function(div) {
        div.innerHTML = "Hello Lalit";
    });
}

greet();

var abc=10;

if (abc > 5){

     document.querySelector(".checkme").innerHTML = "Hello me";
}

else{

 document.querySelector(".checkme").innerHTML = "Hello me check me";
}