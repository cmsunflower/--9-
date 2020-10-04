function rgbRandom(){
    let R=Math.floor(Math.random()*256);
    let G=Math.floor(Math.random()*256);
    let B=Math.floor(Math.random()*256);
    return `rgb(${R},${G},${B})`;
}
console.log(rgbRandom());