const title1 = document.getElementById("title1");
const title = document.getElementById("title");
const title4 = document.getElementById("title4");
const title3 = document.getElementById("title3");
const buttom = document.querySelector("#btn");
const input = document.querySelector("#input");


// let amount = 0;
let ans = 50;
let ans2 = 
buttom.addEventListener("click",function(){

    const num = input.value;
    if(num<ans){
        title1.innerText = num;
    }else if(num>ans){
        title3.innerText = num;
    }else{
        title.innerHTML = "答對了!";
        title4.innerHTML = "恭喜"
    }

    input.value = null;
});

