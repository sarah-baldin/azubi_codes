import React from "react";

function Footer() {
	const year = new Date().getFullYear();
	
	return (
		<section className="site-footer" id="site-footer">
			<a href="/impressum" className="site-footer-content">Impressum</a>
			<p className="site-footer-copyright">Copyright by Sarah Baldin ⓒ {year}</p>
			<a href="/datenschutz" className="site-footer-content">Datenschutz</a>
		</section>
	);
}

export default Footer;