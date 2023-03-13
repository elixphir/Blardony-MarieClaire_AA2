var x = 0;
while(x < 50){
    document.getElementById("loops").innerHTML += (x+1)+ ", ";
    x++;
}
document.getElementById("loops").innerHTML += "51 <br> <br>";


var y = 0;
do {
    document.getElementById("loops").innerHTML += (y+2)+ ", "; 
    y = y + 2;
}
while(y < 48);
document.getElementById("loops").innerHTML += "50 <br> <br>";

for(var z = 0; z < 12; z++){
    document.getElementById("loops").innerHTML += (2**z)+ ", ";
}
document.getElementById("loops").innerHTML += "4096";
