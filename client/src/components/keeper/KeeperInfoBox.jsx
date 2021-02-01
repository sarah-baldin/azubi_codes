import React from "react";

function KeeperInfoBox() {
	return (
		<div className="keeper-info-box">
			<h3>Willkommen in Ihrem neuen Gedächtnis!</h3>
			<p>
				Hier können Sie all Ihre Gedanken und noch zu erledigenden Aufgaben hinterlegen. <br />
				Mit Ihrem Account können Sie sich nach der Registrierung jederzeit und von überall aus in der VergissMeinNicht App anmelden und auf Ihre Notizen zugreifen. Ihre User-Daten werden verschlüsselt in der Datenbank gespeichert, sodass niemand an Ihre Zugangsdaten gelangen kann (siehe Bild). 
			</p>
				<div className="zoom-container">
					<input type="checkbox" id="zoomCheck" />
					<label htmlFor="zoomCheck">
						<img src={process.env.PUBLIC_URL + "images/DB_TestUser.png"} className="img-fluid" alt="DB Crypt"></img>
					</label>
				</div>
			<p>
				Um sich zu registrieren, müssen Sie einfach einen frei wählbaren Nutzernamen und ein Passwort vergeben und den Magic Key eintragen, den Sie in meiner Bewerbungs-Email erhalten haben. Klicken Sie dazu den Button "ANMELDEN" oben rechts an. <br />
				Sollten Sie sich nicht registrieren und einloggen wollen, können Sie die App natürlich auch ohne Anmeldung testen, allerdings werden ihre Notizen dann nur so lange in der App angezeigt, bis Sie das Fenster aktualisieren oder schließen. <br />
			</p>
			<br />
			<h3 style={{"textAlign" : "left"}}>Warum ausgerechnet dieses Projekt?!</h3>
			<p>
				Natürlich habe ich mit dieser App kein neues OneNote oder GoogleKeep programmiert. Diese Programme sind viel umfangreicher und haben deutlich mehr Funktionen.<br />
				Mir geht es bei diesem Projekt darum, Ihnen zu zeigen, dass ich viele grundlegende Bausteine der Programmierung schon beherrsche und in meinen eigenen Projekten umsetzen kann:
			</p>
			<ul>
				<li>
					<b>Eigenes Backend - NodeJS. </b><br />Alle Datenoperationen laufen über dieses Backend - z.B. die Verbindung zur Mongo Atlas Datenbank sowie alle Schreib-, Lese-, Editier- und Lösch-Operationen (CRUD) der App.
				</li>
				<br />
				<li>
					<b>Eigenes User-Interface - HTML, CSS, Bootstrap & React Hooks (Javascript).</b><br />
					Um die Nutzer-Erfahrung so angenehm wie möglich zu gestalten, habe ich mich beim Design der App auf das Wesentliche fokussiert: schnörkellose, intuitive Nutzbarkeit. Mir ist es wichtig, dass die Nutzer sich ohne große Einarbeitung in meinen Projekten zurechtfinden und Spaß an der Nutzung haben.
				</li>
				<br />
				<li>
					<b>Eigenes Prüfsystem für unvollständige oder falsche Eingaben bei der Registrierung und beim Login - Javascript.</b> <br />
					Bevor Ihre Nutzer-Daten zum Server gesendet werden, wird geprüft, ob Ihre Daten korrekt und alle notwendigen Felder ausgefüllt sind. Sollte dies nicht der Fall sein, bekommen Sie eine Fehlermeldung angezeigt, die Ihnen hilft, die Registrierung oder den Login erfolgreich durchzuführen. Erst bei korrekter Eingabe aller Daten werden Ihre Nutzer-Daten an den Server geschickt, der diese Daten dann in der Datenbank speichert oder abruft. 
				</li>
				<br />
				<li>
					<b>Authentifizierung und Verschlüsselung - PassportJS.</b><br /> Ihr Passwort wird verschlüsselt (Salt & Hash) in der Datenbank abgelegt, sodass nur Sie Zugriff auf Ihre Daten haben. Die Authentifizierung übernimmt PassportJS und prüft anhand der Session, ob Sie eingeloggt sind oder nicht. Selbst wenn Sie den Tab der VergissMeinNicht App schließen, sind Sie weiterhin eingeloggt und können beim nächsten Aufruf der Seite weiter an Ihren Notizen arbeiten. Erst wenn Sie den Browser komplett schließen, müssen Sie beim erneuten Aufruf der Seite ihre Login-Daten eingeben, um wieder Zugriff auf Ihre Notizen zu haben. 
				</li>
				<br />
				<li>
					<b>Löschung des Accounts inklusive aller erstellten Notizen - Javascript, NodeJS und Mongoose. </b><br />
					Sollten Sie Ihren Account nicht mehr benötigen, ist es möglich, Ihren Account inklusive aller bisher erstellten Notizen vollständig und unwiderruflich zu löschen. Klicken Sie dazu -wenn Sie eingeloggt sind- auf den "Account löschen" Button unten auf der Seite. Nach einer Sicherheitsabfrage, ob Sie den Account wirklich löschen wollen, sind all ihre Daten aus der Datenbank gelöscht.
				</li>
			</ul>
			<h3>Probieren Sie es aus. <br /> Viel Spaß beim Testen der VergissMeinNicht App!</h3>
		</div>
	);
}

export default KeeperInfoBox;