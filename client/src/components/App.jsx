import React from "react";
import {BrowserRouter as Switch, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Teaser from "./Teaser";
import AboutMe from "./AboutMe";
import QuoteGenerator from "./QuoteGenerator";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import KeeperApp from "./KeeperApp";
import TermsOfService from "./TermsOfService";
import Impressum from "./Impressum";
import Footer from "./Footer";


function App() {

	function HomeContent() {
		return (
			<div className="container-fluid">
				<NavBar />
				<Teaser />
				<AboutMe />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		);
	}

	function stellMichEin() {
		return (
			<div className="container-fluid">
				<QuoteGenerator />
				<Footer />
			</div>
		);
	}

	function Vergissmeinnicht() {
		return (
			<div className="container-fluid">
				<KeeperApp />
			</div>
		);
	}

	function Datenschutz() {
		return (
			<div className="container-fluid">
				<TermsOfService />
				<Footer />
			</div>
		);
	}
	
	function ImpressumSite() {
		return (
			<div className="container-fluid">
				<Impressum />
				<Footer />
			</div>
		);
	}


	return (
		<div className="app-root">
				<Switch>
					<Route exact path="/" component={HomeContent} />
					<Route exact path="/stell-mich-ein" component={stellMichEin} />
					<Route exact path="/vergissmeinnicht" component={Vergissmeinnicht} /> 
					<Route exact path="/datenschutz" component={Datenschutz} />
					<Route exact path="/impressum" component={ImpressumSite} />
				</Switch>	
		</div>				
	);
}

export default App;