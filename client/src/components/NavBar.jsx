import React, { useEffect } from "react";

function NavBar() {
	
	useEffect(() => {
		let navLinks = document.getElementsByClassName("nav-link");
		let navbarDiv = document.getElementById("navbarNavDropdown");

		for (var i = 0; i < navLinks.length; i++) {
			navLinks[i].addEventListener("click", function() {
				var current = document.getElementsByClassName("active");
				current[0].className = current[0].className.replace(" active", "");
				this.className += " active";
				navbarDiv.classList.remove("show");
			});
		} 
	}, []);


	return (
		<section className="nav-section" id="nav-section">
			<div className="row">
				<div className="col-12">
					<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light ">
						<a className="navbar-brand" href="/">
							<img src="/images/fiae_blue.png" width="80" height="40" className="d-inline-block align-top" alt="FIAE-Logo" loading="lazy" /> <span>azubi.codes</span>
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav bg-transparent">
							<li className="nav-item active">
								<a className="nav-link nav-item-event" href="/#home">HOME<span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link nav-item-event" href="/#about-me">ABOUT ME</a>
							</li>
							<li className="nav-item">
								<a className="nav-link nav-item-event" href="/#portfolio">PORTFOLIO</a>
							</li>
							<li className="nav-item">
								<a className="nav-link nav-item-event" href="/#contact">CONTACT</a>
							</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</section>
	);
}

export default NavBar;