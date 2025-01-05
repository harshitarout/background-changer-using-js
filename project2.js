const btn = document.getElementById("btn");

// math.random is used to generate RGB values for the colour change fucntion
// each RGB colour component requiers a value between 0 and 255
let randomNum = ()=>{
    return Math.floor(Math.random()*256);
};
let changeColor = ()=>{

    //Creates a random RGB color using the randomNum function to generate values for red, green, and blue.
//Example: If randomNum() returns 100, 150, and 200, the color string becomes //rgb(100, 150, 200).


    let randomColor =`rgb(${randomNum()},${randomNum()},${randomNum()})`;
    document.body.style.backgroundColor=randomColor;
};
    
    btn.addEventListener("click" , changeColor);

    // after loading the page the color of baackground will be chnaged randomly
    window.addEventListener("load",changeColor)


