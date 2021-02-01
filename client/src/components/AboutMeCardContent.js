import React, { Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';

const cards = [
	{

		id: 0,
		imgSRC: "./images/undraw/aboutMe/education.svg",
		imgALT: "Learning Girl",
		textHead: "wissbegierig",
		textContent:<Fragment key={uuidv4()}>
						<span className="fake-close" key={uuidv4()}> X </span> <br />
						...noch mal zur Schule gehen? Gerne! Ich setze alles daran, schon bald ein sehr gutes Zeugnis vorweisen zu können und die Abschlussprüfung mit Bravour zu bestehen.
						Je mehr ich lerne, desto mehr will ich wissen! Deshalb stöbere ich beinahe täglich durch die aktuellen Tech- und IT-News, mache viele Online-Kurse, sammle Erfahrung in Praktika und setze das Erlernte in eigenen Projekten um. 
					</Fragment>
	},
	{

		id: 1,
		imgSRC: "./images/undraw/aboutMe/ideaFlow.svg",
		imgALT: "Focus Girl",
		textHead: "selbstständig",
		textContent:<Fragment key={uuidv4()}>
						<span className="fake-close" key={uuidv4()}> X </span> <br />
						Ich kann mich gut selbst organisieren, erkenne Aufgabenstellungen eigenständig und arbeite strukturiert auf meine Ziele hin.
						Fange ich ein neues Projekt an, wird nicht sofort "drauf los programmiert". Ich beginne damit, die technischen Anforderungen zu analysieren, schaue mir an, 
						womit sich meine Pläne am besten umsetzen lassen, skizziere ein grobes Layout und fange dann erst an, in kleinen Etappen die einzelnen Komponenten meines Projekts zu entwickeln.
					</Fragment>
	},
	{
		id: 2,
		imgSRC: "./images/undraw/aboutMe/stepsComplete.svg",
		imgALT: "My Way",
		textHead: "zielstrebig",
		textContent:<Fragment key={uuidv4()}>
						<span className="fake-close" key={uuidv4()}> X </span> <br />
						Mit einer guten Portion Lebenserfahrung habe ich die letzten Jahre genutzt, um den Grundstein für meine berufliche Zukunft zu legen.
						Mit dem Ziel vor Augen, eine Ausbildung zur Anwendungsentwicklerin zu machen, habe ich mir autodidaktisch sehr viel nützliches Wissen und neue Skills angeeignet, 
						die mir in der Ausbildung einen Vorspung verschaffen. Frei nach dem Motto "Es ist nie zu spät, das zu werden, was man hätte sein können", komme ich nun meinem Ziel in großen Schritten immer näher.  
					</Fragment>
	},
	{
		id: 3,
		imgSRC: "./images/undraw/aboutMe/jobPrepared.svg",
		imgALT: "Well prepared",
		textHead: "gut vorbereitet",
		textContent:<Fragment key={uuidv4()}>
						<span className="fake-close" key={uuidv4()}> X </span> <br />
						Ob HTML, CSS, JavaScript/jQuery, PHP, SQL/NoSQL, NodeJS, ReactJS oder Shell Skills, all das habe ich mir in Vorbereitung auf die Ausbildung schon angeeignet und bis sie beginnt, werden noch einige neue Skills hinzukommen. Ich habe mich bisher auf Webentwicklung fokussiert, interessiere mich jedoch auch für App- und Desktop-Client-Programmierung. Die nächsten Online-Kurse werden die Themen Docker, Flutter-App-Programmierung und Python behandeln, worauf ich mich schon sehr freue.
					</Fragment>
	},
	{
		id: 4,
		imgSRC: "./images/undraw/aboutMe/newIdeas.svg",
		imgALT: "Girl with ideas",
		textHead: "kreativ",
		textContent:<Fragment key={uuidv4()}>
						<span className="fake-close" key={uuidv4()}> X </span> <br />
					Ich bin ein kreativer Mensch. Privat beschäftige ich mich schon immer gerne mit Design und Malerei - auch digital. Meine kreative Art wird mir in der Anwendungsentwicklung zu Gute kommen, da ich sowohl die technnischen, anwendungsspezifischen, als auch die designrelevanten Anforderungen in der Entwicklung im Blick habe und beides harmonisch in meine Projekte integrieren kann. 
					</Fragment>
	},
	{
		id: 5,
		imgSRC: "./images/undraw/aboutMe/thingsToSay.svg",
		imgALT: "Talking Girl",
		textHead: "kommunikativ",
		textContent:<Fragment key={uuidv4()}>
						<span className="fake-close" key={uuidv4()}> X </span> <br />
						Gute Kommunikation ist mir wichtig, da ich oft feststelle, dass die meisten Fehler auf Misskommunikation zurückzuführen sind. Ich bin ein empathischer, offener Mensch, der immer versucht, lösungsorientiert zu kommunizieren und zu argumentieren.
						Sollte man mal nicht auf einen Nenner kommen, hilft mir meine Kompromissbereitschaft, mich auf neue Ansätze einzulassen und eine Lösung zu finden, die auf neuen Wegen zum gewünschten Ziel führt.
					</Fragment>
	},
	{
		id: 6,
		imgSRC: "./images/undraw/aboutMe/relaxWalk.svg",
		imgALT: "Relaxed Girl",
		textHead: "ausgeglichen",
		textContent:<Fragment key={uuidv4()}>
						<span className="fake-close" key={uuidv4()}> X </span> <br />
						Auch in meiner Freizeit sitze ich häufig vor meinem Code-Editor, probiere neue Sachen aus oder erweitere meine bestehenden Projekte. Wenn ich jedoch mal eine Auszeit brauche und abschalten möchte,
						gehe ich gerne lange mit dem Hund spazieren oder mache mir meine Lieblings-Playlist an. Ich interessiere mich außerdem für Football und Fußball und verfolge die Spiele meiner Lieblingsmannschaften gerne im Stadion oder am Bildschirm.
						Um den Tag gemütlich ausklingen zu lassen, darf auch gerne mal das ein oder andere Videospiel über die Leinwand flimmern. So ist es mir möglich, am nächsten Tag wieder 100% zu geben und mich voll auf die Arbeit fokussieren zu können. 
					</Fragment>
	},
	{
		id: 7,
		imgSRC: "./images/undraw/aboutMe/404.svg",
		imgALT: "Error Picture",
		textHead: "unerschrocken",
		textContent:<Fragment key={uuidv4()}>
						<span className="fake-close" key={uuidv4()}> X </span> <br />
						Fehler sind für mich kein Weltuntergang. Fehler sind gut! Aus ihnen lernt man. Und durch sie wird man besser! Deshalb wirft mich auch so schnell nichts aus der Bahn.
						Ich habe mich in meinem Leben schon einigen Widrigkeiten gestellt und habe aus jedem "Error" etwas Positives mitnehmen können. Fehler zu erkennen, zu analysieren und zu beseitigen ist für mich kein notwendiges Übel,
						sondern eine Chance, sich und die Anwendungen zu verbessern, um bestmögliche Ergebnisse abliefern zu können.
					</Fragment>
	}
];

export default cards;