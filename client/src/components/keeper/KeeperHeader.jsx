import React from "react";

function KeeperHeader(props) {
	return (
		
			<header id="keeper-header" className="container-fluid">
			<div className="row">
				<div className="col-md">
					<h1>
						{props.AppIcon} VergissMeinNicht
					</h1>
				</div>
				<div className="col-md">
					<div className="header-login">
						<div className="username-wrapper">
							<span id="logged-in-user">
								{props.myUser}
							</span>
						</div>
						<div className="register-btn-wrapper">
						<button
							id="register-button"
							className="register-btn btn btn-dark"
							onClick={props.handleButton}
						>
							<span className="btn-text">ANMELDEN</span>
						</button>
						<button
							id="user-logout"
							className="register-btn btn btn-dark"
							onClick={props.handleLogout}
						>
							<i className="fas fa-power-off power-off-icon"><span className="btn-text">LOGOUT</span></i>
						</button>
						</div>
					</div>
				</div>
				</div>
			</header>
		
	);
}

export default KeeperHeader;
