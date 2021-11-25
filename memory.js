var cards = ["demonhunter.jpg", "dkej.jpg", "dudu.jpg", "hunter.jpg", "lock.jpg", "mag.jpg", "monk.jpg", "palek.jpg", "prej.jpg", "rogal.jpg", "szam.jpg", "war.jpg", "dudu.jpg", "mag.jpg", "demonhunter.jpg", "dkej.jpg" , "hunter.jpg", "lock.jpg", "war.jpg",  "prej.jpg", "palek.jpg", "rogal.jpg", "monk.jpg", "szam.jpg" ];

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
		$('.board').html('<h1>Wygrałeś!<br>Wykonane w '+turnCounter+ ' ruchach</h1>');
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