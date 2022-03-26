const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '127.0.0.1',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
   conn.on("data", (data) => {
      console.log("Server says: "data" );
   
});

  return conn;
};

console.log("Connecting ...");
connect();


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

stdin.on("data", handleUserInput);
const handleUserInput = function () {
   if (data === '\u0003') {
     process.exit();
   } 
};

setupInput();

