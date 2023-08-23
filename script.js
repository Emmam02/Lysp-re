let lightOnOrOff = false;

function changeColor(){
    //Denne setter i gang når vi skal skru lyset på.
if (!lightOnOrOff) {
    document.getElementById('lightBulb').src="img.png/lyspå.png.jpg";
    document.getElementById('lightDisplay').innerHTML='Lyset er på!';
    document.getElementById('changeLightSwitch').src="img.png/lightOn.png.jpg"
    lightOnOrOff = !lightOnOrOff
    console.log('det funker')
}
//Denne setter i gang når vi skal skru lyset av.
else {
    document.getElementById('lightBulb').src="img.png/lysav.png.jpg";
    document.getElementById('lightDisplay').innerHTML='Lyset er av!';
    document.getElementById('changeLightSwitch').src="img.png/lightOff.png.jpg"
    lightOnOrOff = !lightOnOrOff;
}


}