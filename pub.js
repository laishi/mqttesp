// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://148.70.212.82:3838')
var topic = '/testmsg'
var message = 'node.js send!'

var times = 1




client.on('connect', function () {
  client.subscribe(topic, function (err) {
    if (!err) {
      setInterval(() => {
        if (times % 2 == 0) {
          client.publish(topic, "1") 
        } else {
          client.publish(topic, "0") 
        }
        times ++
      }, 5000)
    }
  })
})




client.on('message', function (topic, message) {
  // message is Buffer
  console.log("topic: " + topic)
  console.log(message.toString())
  // client.end()
})