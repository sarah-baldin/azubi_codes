const { mongoURL, mySecret, myPort } = require("./config");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes/api");
const User = require("./models/user");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const myPort = process.env.PORT || myPort;
const app = express();


mongoose.set('useCreateIndex', true);
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
    secret: mySecret,
    resave: false,
	saveUninitialized: false,
	cookie: { secure: false, sameSite: "Lax" }
}));

app.use(passport.initialize());
app.use(passport.session());


//Connect to mongoose
mongoose.connect(mongoURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});


// Passport config
passport.use(new LocalStrategy(User.authenticate()));


// use static serialize and deserialize of model for passport session support
passport.serializeUser((user, done) => {
	done(null, user.id);
});
passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		if (err) console.log(err);
		else {
			done(err, user);
		}
	});
});


// Test Mongoose Connection
mongoose.connection.on("connected", (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Mongoose is connected!");
	}
});


// HTTP Request Logger
app.use(morgan("tiny"));


// Use Routes
app.use("/route-to-personal-api", routes);


app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "build/index.html"));
}); 

app.get("*", (req,res) => {
	res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(myPort, (err) => {
	if(err) {
		console.log(`No Connection: -> ${err}`);
	} else {
		console.log(`Server up and running on Port ${myPort}`);
	}
});

