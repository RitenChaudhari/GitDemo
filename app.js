let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let inputColor = document.querySelector("input").value;
    let body = document.querySelector("body");
    body.style.backgroundColor = inputColor;

    let p = document.querySelector("p");
    p.innerText = `Background Color is changed to ${inputColor}`;
})