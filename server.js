const http = require('http');
const debug = require("debug")("node-angular");
const app = require('./backend/app');   //importing the app from the backend


const normalizePort = val =>{
    var port = parseInt(val,10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port; //port number
    }

    return false;
};

const onError = error => {
    if(error.syncall !== "listen" ){
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
    switch (error.code) {
        case "EACCES": 
            console.error(bind + " requires elevated provoleges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " us already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
    debug("Listening on" + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set('port', port);

const server = http.createServer(app);
server.on("error", onError);    //if something goes wrong
server.on("listening", onListening);    //if everything goes well
server.listen(port);