var express = require("express");
var session = require("express-session");
var RedisStore = require("connect-redis")(session);
var app = express();

app.use(session({
    store: new RedisStore({
        host : 'redis',
        port : '6379',
        pass : '',
        ttl: 60 * 60 * 5,
        db: 5,
        prefix: "redisSession:",
        logErrors: true
    }),
    secret: "redis secret key",
    cookie: {
       maxAge: 1000 * 60 * 60 * 5,
       secure: false
    },
    resave: true,
    saveUninitialized: false
}));

app.get(["/api","/"], function (req, resp) {
    var session = req.session;
    if (!session.name)
        resp.status(404).json({message: "Name field is empty! Please Set /api/YOUR_NAME"});
    else
        resp.json({name: "Hello "+ session.name, server: "Server 001"});
});

app.get("/api/:name", function (req, resp) {
    var session = req.session;
    session.name = req.params["name"];
    resp.redirect("/api");
});

app.listen(8080);