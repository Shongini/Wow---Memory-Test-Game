var cardlosowanie = new Array(10);
cardlosowanie[0] = ["demonhunter.jpg", "dkej.jpg", "dudu.jpg", "hunter.jpg", "lock.jpg", "mag.jpg", "monk.jpg", "palek.jpg", "prej.jpg", "rogal.jpg", "szam.jpg", "war.jpg", "demonhunter.jpg", "dkej.jpg", "dudu.jpg", "hunter.jpg", "lock.jpg", "mag.jpg", "monk.jpg", "palek.jpg", "prej.jpg", "rogal.jpg", "szam.jpg", "war.jpg" ];
cardlosowanie[1] = ["palek.jpg","dudu.jpg",  "lock.jpg", "hunter.jpg",  "monk.jpg",  "prej.jpg", "rogal.jpg","mag.jpg", "dkej.jpg",  "war.jpg", "szam.jpg", "demonhunter.jpg",   "monk.jpg", "demonhunter.jpg", "lock.jpg", "dudu.jpg",  "dkej.jpg", "mag.jpg",  "hunter.jpg",  "rogal.jpg",   "palek.jpg", "prej.jpg", "war.jpg",  "szam.jpg", ]; 
cardlosowanie[2] = ["dkej.jpg", "dudu.jpg", "hunter.jpg", "szam.jpg",  "mag.jpg",  "palek.jpg", "prej.jpg", "monk.jpg", "rogal.jpg", "demonhunter.jpg",  "war.jpg", "lock.jpg", "war.jpg", "palek.jpg",  "dkej.jpg", "dudu.jpg",  "lock.jpg",  "monk.jpg",  "demonhunter.jpg", "prej.jpg", "rogal.jpg", "mag.jpg", "hunter.jpg", "szam.jpg", ]; 
cardlosowanie[3] = ["demonhunter.jpg", "dkej.jpg", "dudu.jpg", "hunter.jpg", "lock.jpg", "mag.jpg", "monk.jpg", "palek.jpg", "prej.jpg", "rogal.jpg", "szam.jpg", "war.jpg", "demonhunter.jpg", "dkej.jpg", "dudu.jpg", "hunter.jpg", "lock.jpg", "mag.jpg", "monk.jpg", "palek.jpg", "prej.jpg", "rogal.jpg", "szam.jpg", "war.jpg" ]; 
cardlosowanie[4] = ["demonhunter.jpg", "hunter.jpg", "dkej.jpg",   "lock.jpg", "mag.jpg", "monk.jpg", "palek.jpg", "prej.jpg", "rogal.jpg", "dudu.jpg", "szam.jpg", "war.jpg", "dkej.jpg", "demonhunter.jpg",  "dudu.jpg", "hunter.jpg", "lock.jpg", "mag.jpg", "monk.jpg", "palek.jpg", "prej.jpg", "rogal.jpg", "szam.jpg", "war.jpg" ]; 
cardlosowanie[5] = ["mag.jpg", "demonhunter.jpg", "dudu.jpg", "hunter.jpg", "lock.jpg",  "monk.jpg", "palek.jpg", "dkej.jpg",   "rogal.jpg", "szam.jpg", "war.jpg", "prej.jpg", "palek.jpg", "prej.jpg","dudu.jpg",  "lock.jpg", "hunter.jpg",  "monk.jpg",   "rogal.jpg", "szam.jpg","mag.jpg", "dkej.jpg",  "war.jpg",  "demonhunter.jpg", ]; 
cardlosowanie[6] = ["demonhunter.jpg", "szam.jpg", "dudu.jpg", "monk.jpg", "hunter.jpg", "lock.jpg",  "palek.jpg", "prej.jpg", "dkej.jpg", "mag.jpg", "rogal.jpg",  "war.jpg", "demonhunter.jpg", "dkej.jpg", "dudu.jpg", "hunter.jpg", "lock.jpg", "mag.jpg", "monk.jpg", "palek.jpg", "prej.jpg", "rogal.jpg", "szam.jpg", "war.jpg", ]; 
cardlosowanie[7] = ["rogal.jpg", "lock.jpg", "dkej.jpg",  "hunter.jpg",  "mag.jpg", "monk.jpg", "palek.jpg", "demonhunter.jpg", "szam.jpg", "war.jpg", "dudu.jpg", "prej.jpg", "palek.jpg","dudu.jpg",  "lock.jpg", "hunter.jpg",  "monk.jpg",  "prej.jpg", "rogal.jpg","mag.jpg", "dkej.jpg",  "war.jpg", "szam.jpg", "demonhunter.jpg", ]; 
cardlosowanie[8] = ["war.jpg", "palek.jpg",  "dkej.jpg", "dudu.jpg",  "lock.jpg",  "monk.jpg",  "demonhunter.jpg", "prej.jpg", "rogal.jpg", "mag.jpg", "hunter.jpg", "szam.jpg",  "demonhunter.jpg", "hunter.jpg", "dkej.jpg",   "lock.jpg", "mag.jpg", "monk.jpg", "palek.jpg", "prej.jpg", "rogal.jpg", "dudu.jpg", "szam.jpg", "war.jpg", ]; 
cardlosowanie[9] = ["monk.jpg", "demonhunter.jpg","dudu.jpg",  "dkej.jpg", "mag.jpg",  "hunter.jpg", "lock.jpg", "rogal.jpg",   "palek.jpg", "prej.jpg", "war.jpg",  "szam.jpg",  "hunter.jpg", "demonhunter.jpg", "dkej.jpg", "dudu.jpg", "prej.jpg",  "lock.jpg", "mag.jpg", "monk.jpg", "palek.jpg",  "rogal.jpg", "szam.jpg", "war.jpg" ]; 
cardlosowanie[10] = ["szam.jpg",  "monk.jpg", "dudu.jpg", "demonhunter.jpg","dkej.jpg",  "hunter.jpg","palek.jpg",  "mag.jpg",   "prej.jpg",  "war.jpg", "rogal.jpg", "lock.jpg",  "hunter.jpg", "dkej.jpg",   "lock.jpg", "mag.jpg", "monk.jpg", "palek.jpg", "prej.jpg", "rogal.jpg", "dudu.jpg", "demonhunter.jpg", "szam.jpg", "war.jpg", ]; 


function losowanie()
{
var wylosowane_obrazy = Math.round(Math.random() * cardlosowanie.length);
wylosowany_uklad = cardlosowanie[wylosowane_obrazy];
}

losowanie();
	

var cards = wylosowany_uklad;

if (cards == 0)
{ 
	$('.level').html('Poziom: Łatwy');
} 
else
{
	$('.level').html('Poziom: Średni');
}
	

//alert(cards[4]);

//console.log(cards);

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');

var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

var c12 = document.getElementById('c12');
var c13 = document.getElementById('c13');
var c14 = document.getElementById('c14');
var c15 = document.getElementById('c15');
var c16 = document.getElementById('c16');
var c17 = document.getElementById('c17');

var c18 = document.getElementById('c18');
var c19 = document.getElementById('c19');
var c20 = document.getElementById('c20');
var c21 = document.getElementById('c21');
var c22 = document.getElementById('c22');
var c23 = document.getElementById('c23');




c0.addEventListener("click", function(){ revealCard(0); });
c1.addEventListener("click", function(){ revealCard(1); });
c2.addEventListener("click", function(){ revealCard(2); });
c3.addEventListener("click", function(){ revealCard(3); });
c4.addEventListener("click", function(){ revealCard(4); });
c5.addEventListener("click", function(){ revealCard(5); });

c6.addEventListener("click", function(){ revealCard(6); });
c7.addEventListener("click", function(){ revealCard(7); });
c8.addEventListener("click", function(){ revealCard(8); });
c9.addEventListener("click", function(){ revealCard(9); });
c10.addEventListener("click", function(){ revealCard(10); });
c11.addEventListener("click", function(){ revealCard(11); });

c12.addEventListener("click", function(){ revealCard(12); });
c13.addEventListener("click", function(){ revealCard(13); });
c14.addEventListener("click", function(){ revealCard(14); });
c15.addEventListener("click", function(){ revealCard(15); });
c16.addEventListener("click", function(){ revealCard(16); });
c17.addEventListener("click", function(){ revealCard(17); });

c18.addEventListener("click", function(){ revealCard(18); });
c19.addEventListener("click", function(){ revealCard(19); });
c20.addEventListener("click", function(){ revealCard(20); });
c21.addEventListener("click", function(){ revealCard(21); });
c22.addEventListener("click", function(){ revealCard(22); });
c23.addEventListener("click", function(){ revealCard(23); });

var oneVisible = false;
var turnCounter = 0; 
var visible_nr;
var lock = false;
var pairsLeft = 12;



function revealCard(nr)
{
	var opacityValue = $('#c' +nr).css('opacity');
	
	//alert('Opacity: ' +opacityValue);
	
	if (opacityValue !=0 && lock == false)
	{
		
		lock =true;
		
		//alert(nr);
		
		var obraz  = "url(imgwow/" + cards[nr] + ")"; 
		
		$('#c' + nr).css('backgroundImage', obraz);
		$('#c' + nr).addClass('cardactive');
		$('#c' + nr).removeClass('card');
		
		if (oneVisible == false)
		{
			//firstcard
			
			oneVisible = true;
			visible_nr = nr; 
			lock = false;
		}
		else
		{
			//secondcard
			
			if(cards[visible_nr] == cards[nr])
				
				{
					//alert("para");
					
					setTimeout(function(){hide2Cards(nr, visible_nr)}, 750);
					
				}
			else
			{
					//alert("pudło");
					
					setTimeout(function(){restore2Cards(nr, visible_nr)}, 1000);
			}
			
			turnCounter++;
			$('.score').html('Liczba ruchów: ' +turnCounter);
			oneVisible = false;
		}
			
		
	}
	
	
	
	
}

function hide2Cards(nr1, nr2)
{
	$('#c' +nr1).css('opacity', '0');
	$('#c' +nr2).css('opacity', '0');
	
	pairsLeft--;
	
	if(pairsLeft == 0)
	{
		$('.board').html('<h1>Wygrałeś!<br>Wykonane w '+turnCounter+ ' ruchach</h1><br /><br /><span class="reset" onclick="location.reload()"><h1>Zagrasz ponownie?</h1></span>');
	}
	
	lock = false;
}

function restore2Cards(nr1, nr2)
{
		$('#c' + nr1).css('backgroundImage', 'url(imgwow/tlologowow.jpg)');
		$('#c' + nr1).addClass('card');
		$('#c' + nr1).removeClass('cardactive');
		
		$('#c' + nr2).css('backgroundImage', 'url(imgwow/tlologowow.jpg)');
		$('#c' + nr2).addClass('card');
		$('#c' + nr2).removeClass('cardactive');
		
		lock =false;
}

