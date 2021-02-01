import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import NavBar from "./NavBar";

function QuoteGenerator() {
	const [apiQuotes, setApiQuotes] = useState([]);
	const [reasons, setReasons] = useState([]);
	const [headline, setHeadline] = useState("Zapfen Sie meine Api an . . .");
	const [reasonNumber, setReasonNumber] = useState(0);
	let myQuote = {};
	let myReason = "";
	const bigQuote = useRef();
	const qText = useRef();
	const aText = useRef();
	const newQuoteBtn = useRef();
	const newReasonBtn = useRef();
	const twitterBtn = useRef();
	const loader = useRef();


	useEffect(() => {	
		// Get Quote from API
		async function getQuote() {
		const response = await axios.get("https://type.fit/api/quotes");
		const myData = await response.data; 
		setApiQuotes(myData);	
		}
		getQuote();

		// Get Quote from API
		function getReasons() {
			axios({
				method: "GET",
				url: "/route-to-reasons-for-hiring-sarah",
				headers: {
					'Content-Type': 'application/json'
				}
			}).then((res) => {
				const myData = res.data; 
				setReasons(myData);	
			})
			.catch((err) => {
				console.log(err);
			});
			
		}
		getReasons();
		
		qText.current.innerText = "und lassen sich (gefühlt) 1000 Gründe anzeigen, wieso Sie mich einstellen sollten. Klicken Sie dafür einfach auf »Neuer Grund«. Haben Sie alle Gründe gesehen? Klicken Sie auf »Lieber ein Zitat«, um eine Zitat-API aus dem Netz anzuzapfen und sich mit klugen Sprüchen berieseln zu lassen. Mit dem Twitter-Button nutzen Sie die Twitter-API und können einen Tweet absetzen. Viel Spaß!" ;
		aText.current.style.visibility = "hidden";
		aText.current.innerText = "Sarah Baldin";
	}, []);


		//Get and show new Quote
		function newQuote() {
			setHeadline("Weisheit des Tages . . .");
			bigQuote.current.style.display = "inline-block";
			loading();

			let number = Math.floor(Math.random() * apiQuotes.length);
			myQuote = apiQuotes[number];
		
			// Set the Font-Size of Quote to smaller when it's a long Quote 
			if (myQuote.text.length > 100) {
				qText.current.classList.add("long-quote");
			} else {
				qText.current.classList.remove("long-quote");
			}
			
			qText.current.innerText = myQuote.text;
			aText.current.style.visibility = "visible";

			// Set Author to "unknown" when there is no Author
			if (myQuote.author === "" || myQuote.author === null ) {
				
				aText.current.innerText ="- Unknown -";
			} else {
				aText.current.innerText = "- " + myQuote.author + " -";	
			}
			
			//Set Quote, hide Loader
			complete(); 	
		}


		const getNewReason = () => {
			if (reasons.length > 0){
				if (reasonNumber >= (reasons.length-1)) {
					setReasonNumber(0);
				} else {
					setReasonNumber(reasonNumber+1);
				}
				myReason = reasons[reasonNumber].reason;
				newReason();
			} else {
				qText.current.innerText = "Datenbank wird abgerufen. Bitte warten Sie einen kurzen Moment und klicken Sie erneut...";
				aText.current.style.visibility = "hidden";
			}
		}

		function newReason() {
			bigQuote.current.style.display = "none";
			setHeadline("Wir sollten Sarah ausbilden, weil . . .");
			loading();
			
				if (myReason.length > 100) {
					qText.current.classList.add("long-quote");
				} else {
					qText.current.classList.remove("long-quote");
				}
				
				qText.current.innerText = myReason;
				aText.current.style.visibility = "hidden";
				complete(); 
		}

		
		// Tweet Quote
		function tweetQuote() {
			const twitterUrl = `https://twitter.com/intent/tweet?text=Unsere Auszubildende zur Anwendungsentwicklerin 2021 wird Sarah Baldin, weil: https://azubi.codes/stell-mich-ein`;
			window.open(twitterUrl, "_blank");
		}

		// Show Loading
		function loading() {
			bigQuote.current.hidden = true;
			loader.current.hidden = false;
		}

		// Hide Loading
		function complete() {
			bigQuote.current.hidden = false;
			loader.current.hidden = true;
		}


	return (
		<div className="component-wrapper colored-background">
		<NavBar />
			<section className="quote-generator">
				<div className="quote-container" id="quote-container">
				<h1 className="headline">{headline}</h1>
				<hr />
					<div className="quote-text">
						<i className="fas fa-quote-left" id="bigQuote" ref={bigQuote}></i><br />
						<span id="quote" ref={qText}>
							<div className="loader" id="loader" ref={loader}></div>
						</span>
					</div>
					<div className="quote-author">
						<span id="author" ref={aText}></span>
					</div>
					<div className="button-container col-12">
						<button className="new-quote" id="new-quote" ref={newQuoteBtn} onClick={newQuote}>Lieber ein Zitat</button>
						<button className="twitter-button" id="twitter" ref={twitterBtn} title="Tweet it!" onClick={tweetQuote}>
							<i className="fab fa-twitter"></i>
						</button>
						<button className="new-reason" id="new-reason" ref={newReasonBtn} onClick={getNewReason}>Neuer Grund</button>
					</div>
				</div>
			</section>	
		</div>
	);
}

export default QuoteGenerator;