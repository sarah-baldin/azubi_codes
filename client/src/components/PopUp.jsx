import React from "react";
/* import RegisterForm from "./keeper/RegisterForm"; */

function PopUp(props) {
	
	function closePopup() {
		document.getElementById("popup").style.display = "none";
	}

	return (
		<div className='popup' id="popup">
			<div className="popup-head">
				<span onClick={closePopup} className="close-popup">X</span>
			</div>
			<div className='popup-inner'>
				{props.popupInner}
		  	</div>
		</div>
	  );
}

export default PopUp;