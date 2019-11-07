const mqtt = require('mqtt');

const options = {
  clientId: 'apinodevanilla',
  username: 'homeclient',
  password: '1qaz@WSX'
};

const client = mqtt.connect('mqtt://192.168.3.146', options);

client.on('connect', () => {
  console.log('Conectado ao Broker Mqtt');

  client.subscribe('esplamp01');
});

client.on('message', (topic, message) => {
  console.log(topic, message.toString());
});

module.exports = client;
