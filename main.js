











function Rgb(){

    let red = Math.floor(Math.random()*256)

    let green = Math.floor(Math.random()*256)

    let blue = Math.floor(Math.random()*256)
    
    document.getElementById("box").style.backgroundColor = `rgb(${red},${green},${blue})`;
    console.log(`changed the background color of #box to : rgb(${red},${green},${blue})`)
}

