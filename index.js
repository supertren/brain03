const net = new brain.recurrent.LSTM()

net.train([
  { input: 'I love this library', output: 'positive' },
  { input: 'This is awesome', output: 'positive' },
  { input: 'I hate this library', output: 'negative' },
  { input: 'This is terrible', output: 'negative' },
  { input: 'This is okay', output: 'neutral' },
  { input: 'I don't care', output: 'neutral' },
])

// Train the network
net.train(data, {
  iterations: 200,
  log: true,
});


// Test the network
console.log(net.run('This is amazing')); // positive
console.log(net.run('This is boring')); // negative
console.log(net.run('This is fine')); // neutral



