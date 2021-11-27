
window.onload = function () {

	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var btn3 = document.getElementById("btn3");

	var btnstart = document.getElementById("start");

	var t = document.getElementById("timer");
	

	var m = document.getElementById("m");
	var s = document.getElementById("s");
	var tm=24;
	var ts= 60;

	var startstop=false;

	btn1.onclick=function(){
		btn1.className="active";
		btn2.className="btn";
		btn3.className="btn";

		m.innerHTML="25";
		s.innerHTML="00";

		btnstart.innerHTML="START";
		startstop=false;
		tm=24;
		ts= 60;
	};

	btn2.onclick=function(){
		btn2.className="active";
		btn1.className="btn";
		btn3.className="btn";

		m.innerHTML="5";
		s.innerHTML="00";

		btnstart.innerHTML="START";
		startstop=false;
		tm=4;
		ts= 60;
	};

	btn3.onclick=function(){
		btn3.className="active";
		btn2.className="btn";
		btn1.className="btn";

		m.innerHTML="15";
		s.innerHTML="00";

		btnstart.innerHTML="START";
		startstop=false;
		tm=14;
		ts= 60;
	};



	function tictok()
	{
		if(ts==0 )
		{
			if(tm!=0)
			{
				ts=59;
				tm-=1;

				m.innerHTML=tm.toString();
				s.innerHTML=ts.toString();
			}
			else{
				startstop=false;
				if(btn3.className=="active")
				{
					btn1.click();
				}
				else if(btn2.className=="active")
				{
					btn1.click();
				}
				else
					{
						btn2.click();
					}
				
				
			}
			
		}
		else{
			ts-=1;

			m.innerHTML=tm.toString();
			s.innerHTML=ts.toString();
		}
		



	}


	btnstart.onclick=function(){
		
		if(startstop==true)
		{
			startstop=false;
			btnstart.innerHTML="START";
		}
		else{
			startstop=true;
			btnstart.innerHTML="STOPE";
		}
	}


	setInterval(function() {
		if(startstop==true)
		{
			tictok();
		}
		
	  }, 1000);
	


	var myVar = setInterval(myTimer, 1000);

	function myTimer() {
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("nowt").innerHTML = t;
}
};