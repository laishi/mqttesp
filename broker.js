// MQTT broker
var mosca = require("mosca");
// var settings = { port: 3838 };



var settings = {
  port: 3838,
  http: {
      port: 3939,
      bundle: true,
      static: './'
  }
};






var broker = new mosca.Server(settings);

broker.on("ready", () => {
  console.log("Broker is ready!");
});

broker.on("published", (packet) => {
  message = packet.payload.toString();
  console.log(message);
});





