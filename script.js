let btn=document.querySelector("button");
btn.addEventListener("click",  function(){
        let randomcolor=getrandomcolor();


        let h1=document.querySelector("h1");
        h1.innerText=randomcolor;


        let div=document.querySelector("div");
        div.style.backgroundColor = randomcolor;


        this.style.backgroundColor="silver";


        // let text=document.createElement("h2");
        // text.innerHTML="this is your colour";
        // text.style.backgroundColor = randomcolor;
        // div.append(text);

    });
   
   
    
function getrandomcolor(){
    let red =Math.floor(Math.random()*255);
    let green =Math.floor(Math.random()*255);
    let blue =Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
   
    return color;
    


}
