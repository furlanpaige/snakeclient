const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '127.0.0.1',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
   conn.on("connect", (data) => {
      console.log("Server says: "data" );
                    
    });
                  
    conn.on('connect', () => {
     console.log("Connected to game server");
        
    });
  
    conn.on("connect", (name) => {
      console.write("Name: PF");
      
   });

  return conn;
};

console.log("Connecting ...");
connect();
