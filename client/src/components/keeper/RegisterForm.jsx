import React, { useState, useContext } from "react";
import { Context } from "./Context.js";
import axios from "axios"; 
import Swal from "sweetalert2";


function RegisterForm(props) {
	const [loggedIn, setLoggedIn] = useContext(Context);
	const [termsAccepted, setTermsAccepted] = useState(false);
	const [pswCheck, setPswCheck] = useState("");
	const [registerUser, setRegisterUser] = useState({
		username: "",
		password: "",
		magicKey: ""	
	});

	const [user, setUser] = useState({
		username: "",
		password: ""	
	});

		
	function handleRegisterInput(e) {
		const { name, value } = e.target;
		setRegisterUser((prevValue) => {
			return {
				...prevValue,
				[name] : value
			}
		});
	}


	function handleLoginInput(e) {
		const { name, value } = e.target;
		setUser((prevValue) => {
			return {
				...prevValue,
				[name] : value
			}
		});
	}


	function handlePasswordCheck(e) {
		const rePSW = e.target.value;
		setPswCheck(rePSW);
	}


	function handleRegister(e) {
		e.preventDefault();
		let usernameStr = registerUser.username;
		let passwordStr = registerUser.password;
		let pswCheckStr = pswCheck;
		let magicKeyStr = registerUser.magicKey;

		if (registerUser.username  !== "" && registerUser.password !== "" && pswCheck !== "" && registerUser.magicKey !== "") {
			document.getElementById("reg-form-tooltip-username").style.display = "none";
			document.getElementById("form-tooltip-magicKey").style.display = "none";
			document.getElementById("reg-form-tooltip-password").style.display = "none";
			document.getElementById("form-tooltip-password-confirm").style.display = "none";

			if ((/^[A-Za-z0-9]+$/).test(usernameStr) && (/^[A-Za-z0-9]+$/).test(passwordStr) && (/^[A-Za-z0-9]+$/).test(pswCheckStr) && (/^[A-Za-z0-9]+$/).test(magicKeyStr)) {
				if (registerUser.password === pswCheck) {
					document.getElementById("reg-form-tooltip-password").style.display = "none";
					document.getElementById("form-tooltip-password-confirm").style.display = "none";
					if (termsAccepted) {
						document.getElementById("form-tooltip-agree-terms").style.display = "none";
						axios({
							method: "POST",
							url: "/route-to-check-authentication",
							data: {myKey: registerUser.magicKey}
							})
							.then((res) => {
								if ( res.data.result === "success") {
									document.getElementById("form-tooltip-magicKey").style.display = "none";
		
									axios({
									method: "POST",
									url: "/route-to-register-new-users",
									data: {username: registerUser.username, password: registerUser.password}
									},
									{ withCredentials: true })
									.then(res => {
										if (res.data.result === "success") {
											setRegisterUser({
												username: "",
												password: "",
												magicKey: ""	
											});
											setPswCheck("");
											Swal.fire("Super!", res.data.message, "success")
											.then(document.getElementById("login-form-link").click());
											
										} else {
											Swal.fire("Sorry!", res.data.message, "error");
										}
									})
									.catch(err => {
										console.log("ERROR während User Registration -> ", err);
									});
								} else {
									document.getElementById("form-tooltip-magicKey").style.display = "block";
								}
							})
							.catch((err) => {console.log(err)});
					}else {
						document.getElementById("form-tooltip-agree-terms").style.display = "block";
					}
				} else {
					document.getElementById("form-tooltip-password-confirm").style.display = "block";
				}
			} else {
				document.getElementById("reg-form-input-info").style.color = "red";
				document.getElementById("reg-form-input-info").style.fontWeight = "bold";
			} 	
		} else {
			document.getElementById("form-tooltip-magicKey").style.display = "none";

			if (registerUser.username === "") {
				document.getElementById("reg-form-tooltip-username").style.display = "block";
			} else {
				document.getElementById("reg-form-tooltip-username").style.display = "none";
			}

			if (registerUser.password === "") {
				document.getElementById("reg-form-tooltip-password").style.display = "block";
			} else {
				document.getElementById("reg-form-tooltip-password").style.display = "none";
			}

			if (registerUser.magicKey === "") {
				document.getElementById("reg-form-tooltip-magicKey").style.display = "block";
			} else {
				document.getElementById("reg-form-tooltip-magicKey").style.display = "none";
			}

			if (pswCheck === "") {
				document.getElementById("form-tooltip-password-confirm").style.display = "block";
			} else {
				document.getElementById("form-tooltip-password-confirm").style.display = "none";
			}
		}
	}


	function handleLogin(e) {
		e.preventDefault();
		let usernameStr = String(user.username);
		let passwordStr = String(user.password);

		if ((/^[A-Za-z0-9]+$/).test(usernameStr) && (/^[A-Za-z0-9]+$/).test(passwordStr)) {
			
			axios({
			method: "Post",
			url: "/route-to-login-users",
			headers: {
				'Content-Type': 'application/json'
			},
			data: {username: usernameStr, password: passwordStr}
			},
			{ withCredentials: true })
			.then(res => {
				if ( res.data.result === "success") {
					Swal.fire("Login erfolgreich!", res.data.message, "success")
					.then((result) => {
						if (result.isConfirmed) {
							setLoggedIn(true);
							const myUser = res.data.user;
							setUser({
								username: "",
								password: ""
							});
							sessionStorage.setItem("user", myUser);
							document.getElementById("popup").style.display = "none";
						}
					});
				} else {
					Swal.fire("Sorry!", res.data.message, "error");
				} 
			})
			.catch(() => {
				Swal.fire("Sorry!", "Username und/oder Passwort falsch!", "error");
			}); 

		} else {
			if (usernameStr === "" && passwordStr === "") {
				document.getElementById("form-tooltip-username").style.display = "block";
				document.getElementById("form-tooltip-password").style.display = "block";
				document.getElementById("form-tooltip-login-general").style.display = "none";
			} else if (usernameStr === "" && passwordStr !== "") {
				document.getElementById("form-tooltip-password").style.display = "none";
				document.getElementById("form-tooltip-username").style.display = "block";
				document.getElementById("form-tooltip-login-general").style.display = "none";
			} else if (usernameStr !== "" && passwordStr === "") {
				document.getElementById("form-tooltip-password").style.display = "block";
				document.getElementById("form-tooltip-username").style.display = "none";
				document.getElementById("form-tooltip-login-general").style.display = "none";
			} else {
				document.getElementById("form-tooltip-password").style.display = "none";
				document.getElementById("form-tooltip-username").style.display = "none";
				document.getElementById("form-tooltip-login-general").style.display = "block";
			}
		}
	}


	function handleButton(e) {
		if (e.target.id === "login-form-link") {
			document.getElementById("register-form").style.display = "none";
			document.getElementById("login-form").style.display = "block";
		} else {
			document.getElementById("login-form").style.display = "none";
			document.getElementById("register-form").style.display = "block";
		}
	}


	function handleTerms(e) {
		const checkbox = e.target;
		if (checkbox.checked) {
			setTermsAccepted(true);
		} else {
			setTermsAccepted(false);
		}
	}


	return (
		<div className="popup-container">
			<div className="row">
				<div className="col-12">
					<div className="panel panel-login">
						<div className="panel-heading">
							<div className="row">
								<div className="col-6">
									<button onClick={handleButton} className="form-btn" id="login-form-link">LOGIN</button>
								</div>
								<div className="col-6">
									<button onClick={handleButton} className="form-btn" id="register-form-link">REGISTRIEREN</button>
								</div>
							</div>
							<hr />
						</div>
						<div className="panel-body">
							<div className="row">
								<div className="col-12">
									<form id="login-form" onSubmit={handleLogin} style={{"display": "none"}}>
										<p id="form-tooltip-login-general" className="form-tooltip-info-general">Bitte überprüfen Sie Ihre Eingaben. Nur Buchstaben & Ziffern erlaubt!</p>
										<div className="form-group">
											<input type="text" name="username" onChange={handleLoginInput} id="login-username" tabIndex="1" className="form-control" placeholder="Username" value={user.username} />
											<div id="form-tooltip-username" className="form-tooltip"><p>Username darf nicht leer sein!</p></div>
										</div>
										<div className="form-group">
											<input type="password" name="password" id="login-password" onChange={handleLoginInput} tabIndex="2" className="form-control" placeholder="Passwort" value={user.password} />
											<div id="form-tooltip-password" className="form-tooltip"><p>Passwort darf nicht leer sein!</p></div>
										</div>
										<div className="form-group">
											<div className="row">
												<div className="col-12">
													<button type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-form" value="Login">LOGIN</button>
												</div>
											</div>
										</div>
									</form>
									<form id="register-form" onSubmit={handleRegister} style={{"display": "block"}}>
										<p id="reg-form-input-info" className="form-tooltip-info-general">Nur Buchstaben & Ziffern erlaubt. Sonder- und Leerzeichen sind ungültig!</p>
										<div className="form-group">
											<input type="text" name="username" onChange={handleRegisterInput} id="username" tabIndex="1" className="form-control" placeholder="Username" value={registerUser.username} />
											<div id="reg-form-tooltip-username" className="form-tooltip"><p>Username darf nicht leer sein!</p></div>
										</div>
										<div className="form-group">
											<input type="text" name="magicKey" onChange={handleRegisterInput} id="magicKey" tabIndex="1" className="form-control" placeholder="Magic Key" value={registerUser.magicKey} />
											<div id="form-tooltip-magicKey" className="form-tooltip"><p>Magic Key ist nicht korrekt!</p></div>
											<div id="reg-form-tooltip-magicKey" className="form-tooltip"><p>Magic Key darf nicht leer sein!</p></div>
										</div>
										<div className="form-group">
											<input type="password" name="password" onChange={handleRegisterInput} id="password" tabIndex="2" className="form-control" placeholder="Passwort" value={registerUser.password} />
											<div id="reg-form-tooltip-password" className="form-tooltip"><p>Passwort darf nicht leer sein!</p></div>
										</div>
										<div className="form-group">
											<input type="password" name="confirmPassword" onChange={handlePasswordCheck} id="confirm-password" tabIndex="2" className="form-control" placeholder="Passwort wiederholen" value={pswCheck} />
											<div id="form-tooltip-password-confirm" className="form-tooltip"><p>Passwort stimmt nicht überein!</p></div>
										</div>
										<div className="form-group">
											<p className="accept-terms"><input type="checkbox" name="accept-terms" onChange={handleTerms} id="accept-terms-checkbox" /><a href="/datenschutz" id="accept-terms-label">Datenschutzerklärung</a> akzeptieren</p>
											<div id="form-tooltip-agree-terms" className="form-tooltip"><p>Sie müssen die Datenschutzbedingungen akzeptieren um sich registrieren zu können!</p></div>
										</div>
										<div className="form-group">
											<div className="row">
												<div className="col-12">
													<button type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-form" value="Register Now">REGISTRIEREN</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterForm;





