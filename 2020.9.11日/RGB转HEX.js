function rgbToHex(color){
    var str=color+'';
    let reg = (/(0|1\d{0,2}|2[0-5]{2}),(0|1\d{0,2}|2[0-5]{2}),(0|1\d{0,2}|2[0-5]{2})/);
    let matchColor = str.match(reg);
    let R=parseInt(matchColor[1]);
    let G=parseInt(matchColor[2]);
    let B=parseInt(matchColor[3]);
    return '#' + ((1 << 24) + (R << 16) +( G << 8) + B).toString(16).slice(1);
}
console.log(rgbToHex('rgb(13,0,255)'));
let temp = 'rgb(13,0,255)'.match(/(0|1\d{0,2}|2[0-5]{2}),(0|1\d{0,2}|2[0-5]{2}),(0|1\d{0,2}|2[0-5]{2})/);
console.log(temp);


function colorRGB2Hex(color) {
    var rgb = color.split(',');
    var r = parseInt(rgb[0].split('(')[1]);
    var g = parseInt(rgb[1]);
    var b = parseInt(rgb[2].split(')')[0]);

    var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex;
}
console.log(colorRGB2Hex('rgb(13,0,255)'));