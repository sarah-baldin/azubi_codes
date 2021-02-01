import React, {useEffect, useState} from "react";
import TouchAppRoundedIcon from '@material-ui/icons/TouchAppRounded';

function AboutMeCard(props) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const aboutMeText = document.querySelectorAll(".card-text");
		aboutMeText.forEach(function(val) {
        	val.style.display = 'none';
		});

		if (window.innerWidth <= 1024) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}

	}, []);


	function showCardText(e) {
		const fakeClose = document.querySelectorAll(".fake-close");
		e.currentTarget.classList.add("card-shadow");
		e.currentTarget.children[0].style.display = "none";
		e.currentTarget.children[1].children[0].style.display = "none";
		e.currentTarget.children[1].children[1].style.display = "inline-flex";

		isMobile ? 
		fakeClose.forEach(function(val) {
			val.style.display="inline-block";
		})
		: 
		fakeClose.forEach(function(val) {
			val.style.display="none";
		});
	}


	function toggleCardText(e) {
		if (e.currentTarget.children[0].style.display === "none") {
			e.currentTarget.classList.remove("card-shadow");
			e.currentTarget.children[0].style.display = "block";
			e.currentTarget.children[1].children[0].style.display = "block";
			e.currentTarget.children[1].children[2].style.display = "none";
			e.currentTarget.children[1].children[1].style.display = "block";
		} else {
			e.currentTarget.classList.add("card-shadow");
			e.currentTarget.children[0].style.display = "none";
			e.currentTarget.children[1].children[0].style.display = "none";
			e.currentTarget.children[1].children[2].style.display = "inline-flex";
			e.currentTarget.children[1].children[1].style.display = "none";
		}
	}
	

	function hideCardText(e) {
		e.currentTarget.classList.remove("card-shadow");
		e.currentTarget.children[0].style.display = "block";
		e.currentTarget.children[1].children[0].style.display = "block";
		e.currentTarget.children[1].children[1].style.display = "none";
	}


	return (
		<div className="card about-me-card" onClick={isMobile ? toggleCardText : hideCardText} onMouseOver={isMobile ? null : showCardText} onMouseOut={isMobile ? null : hideCardText}>
			<img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
			<div className="card-body">
				<h2 className="card-title centered">{props.cardTitle}</h2>
				{isMobile ? <p className="read-more"><TouchAppRoundedIcon style={{"color" : "#6C63FF", "fontSize" : "1.2rem"}} /> mehr...</p> : null}
				<p className="card-text">{props.cardContent}</p>
			</div>
		</div>
	);
}

export default AboutMeCard;