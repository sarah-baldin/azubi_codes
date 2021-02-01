import React, {useEffect} from "react";

function Teaser() {
	/* const audio = new Audio("../sounds/hallo.mp3"); */
	
	useEffect(() => {
		var avatar = document.getElementById("avatar");
		
		function clickHandler() {
			console.log("Mit dem Klick auf meinen Avatar hätte ich mich gerne in Form einer Audio-Datei persönlich vorgestellt. Da dies jedoch auf einigen Devices zu Problemen führte, nahm ich die Funktion wieder heraus. Gerne übernehme ich die persönliche Vorstellung in einem Vorstellungsgespräch ;)");
			/* audio.play(); */
		}

		avatar.addEventListener("click", clickHandler);
		return () => window.removeEventListener("click", clickHandler);
	  });
	  

	  const date = new Date();
	  const currentTime = date.getHours();
	  let daytime;
	
	  if (currentTime < 12) {
		daytime = "Guten Morgen";
	  } else if (currentTime < 18) {
		daytime = "Guten Tag";
	  } else {
		daytime = "Guten Abend";
	  }


	return (
		<div className="component-wrapper">
			<section className="jumbotron colored-background" id="home">
				<div className="section-content">
					<div id="avatar-div">
						<div id="bubble"></div>
						<img className="avatar img-fluid" id="avatar" src="./images/teaser_ava.png" alt="Avatar" />
					</div>
					<div className="row">
						<div className="col-12">
							<h1 className="display-4 jumbotron-headline">{daytime}, ich bin Sarah</h1>
							<p className="lead">...und ich suche einen Ausbildungsplatz zur Anwendungsentwicklerin!</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Teaser;