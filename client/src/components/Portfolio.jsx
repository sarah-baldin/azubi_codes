import React from "react";

function Portfolio() {

	return (
		<div className="component-wrapper">
			<section className="portfolio colored-background" id="portfolio">
				<div className="section-content">
					<div className="row">
						<div className="col-12">
							<h1 className="heading" id="portfolio-heading">
								Portfolio
							</h1>
							<p className="subtitle"></p>
							<div id="carouselItems" className="carousel slide" data-ride="carousel" data-interval={false} data-touch={true}>
								<a className="carousel-control-prev" href="#carouselItems" role="button" data-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="sr-only">nächstes</span>
								</a>
								<a className="carousel-control-next" href="#carouselItems" role="button" data-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="sr-only">zurück</span>
								</a>
								<div className="carousel-inner">
									<div id="3" className="carousel-item active">
										<div className="circle-and-img">
											<div className="circle">
												<a href="/vergissmeinnicht">
													<img src="./images/undraw/undraw_dev_focus.svg" className="carousel-img" alt="Bild" />
												</a>
											</div>
										</div>
										<div className="carousel-text-div">
											<p className="carousel-item-text">
											Vergesslich?!<br /> Ich habe die Lösung für Sie! Schauen Sie bei "VergissMeinNicht" rein und füllen Sie die App mit Leben. Erstellen Sie Ihre Notizen und greifen Sie auf sie zu, wo auch immer Sie grade sind.
											<br /> - Umgesetzt mit NodeJS, React, MongoDB Atlas, PassportJS, Bootstrap und JavaScript -
											</p>
										</div>
									</div>
									<div id="2" className="carousel-item">
										<div className="circle-and-img">
											<div className="circle">
												<a href="https://simon-game-sb.herokuapp.com/" target="_blank" rel="noreferrer">
													<img src="./images/undraw/undraw_game.svg" className="carousel-img" alt="Bild" />
												</a>
											</div>
										</div>
										<div className="carousel-text-div">
											<p className="carousel-item-text">
											Grade gelangweilt? Ich hoffe nicht!<br />Falls doch: Spielen Sie eine Runde "Simon"! Merken Sie sich die Farb-/Sound-Folgen und knacken Sie den Highscore! <br />
											Dies ist eines meiner ersten Projekte. <br /> - Umgesetzt mit Javascript/jQuery und Bootstrap -
											</p>
										</div>
									</div>
									<div id="1" className="carousel-item">
										<div className="circle-and-img">
											<div className="circle">
												<a href="/stell-mich-ein">
													<img src="./images/undraw/undraw_modern2.svg" className="carousel-img" alt="Bild" style={{"top" : "3%"}} />
												</a>
											</div>
										</div>
										<div className="carousel-text-div">
											<p className="carousel-item-text">
											Sie fragen sich immer noch: "Warum sollte ich ausgerechnet Sarah den Ausbildungsplatz geben?" <br />
											Schauen Sie sich dieses Projekt an. Es zapft meine Api an und liefert Ihnen (gefühlt) 1000 Gründe, warum ICH die richtige Wahl bin! <br />
											- Umgesetzt mit NodeJS, React, MongoDB Atlas und Javascript - 
											</p>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<ol className="carousel-indicators">
											<li data-target="#carouselItems" data-slide-to="0" className="active"></li>
											<li data-target="#carouselItems" data-slide-to="1"></li>
											<li data-target="#carouselItems" data-slide-to="2"></li>
										</ol>
									</div>
								</div> 
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Portfolio;