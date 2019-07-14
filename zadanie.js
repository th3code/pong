document.onkeydown = klik;
var ball_x=0;
var ball_y=0;
ruch();
var pozycja=0;
var predkosc_belki=45;
var poz_max=900;
var ok_max=100;
var ok_min=0;

function klik(e){
	var key = event.keyCode;
    if(key == 37) {
		if(pozycja>0){
        pozycja-=predkosc_belki;
		ok_max-=predkosc_belki;
		ok_min-=predkosc_belki;
		console.log("ok_max: "+ok_max+"ok_min: "+ok_min);
		}
			document.getElementById('belka').style.left = pozycja+"px" ;
	 }
	else if(key == 39){
		if(pozycja<poz_max&&pozycja>=0){
        pozycja+=predkosc_belki;
		ok_max+=predkosc_belki;
		ok_min+=predkosc_belki;
		console.log("ok_max: "+ok_max+"ok_min: "+ok_min);
		}
		document.getElementById('belka').style.left = pozycja+"px" ;
    }
}

// wartosci max dla pilki : 	top:580px; left:990px;


kierunek_x = new Boolean(true); // true - prawo
kierunek_y = new Boolean(true); // true - dół



function ruch(){
	
	ball_x++;
	ball_y++;
	document.getElementById('ball').style.top = ball_y + "px" ;
	document.getElementById('ball').style.left = ball_x + "px" ;
	console.log(" x: "+ball_x);
	console.log(" y: "+ball_y);

	requestAnimationFrame(ruch);
}


























