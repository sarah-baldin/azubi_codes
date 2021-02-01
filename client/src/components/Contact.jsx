import React, { useRef } from "react";

function Contact() {
	const popUp = useRef();

	const handlePhoneClick = (e) => {
		popUp.current.style.display = "block";
	}
	
	const closePopUp = (e) => {
		if (e.target.classList.value === "modal" || e.target.classList.value === "modal-close") {
			popUp.current.style.display = "none";
		}
	}
	

	return (
		<div className="component-wrapper" id="contact-wrapper">
			<section className="contact white-background" id="contact">
				<div className="contact-content">
					<div className="row">
						<div className="col-12">
							<div className="contact-text">
								<h1 className="contact-me">Kontaktieren Sie mich</h1>
								<span className="adress">Name - Straße -PLZ Ort</span> 
							</div>
							<div className="row">
								<div className="col-12">
									<div className="contact-icons">
										<a href="mailto:meine@mail.adresse"><i className="fas fa-envelope-square"></i></a>
										<a href="#contact" onClick={handlePhoneClick}><i className="fas fa-phone-square"></i></a> 
										<a href="https://github.com/sarah-baldin" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
									</div>
									
									<div id="myModal" className="modal" onClick={closePopUp} ref={popUp}>
										<div className="modal-content">
											<span className="modal-close" onClick={closePopUp}>&times;</span>
											<p className="modal-text">Ich freue mich auf Ihren Anruf! <br /> <a href="tel:+meineRufnummer" className="phone-number">meine Rufnummer</a></p>
										</div>
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

export default Contact;