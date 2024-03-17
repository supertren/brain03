const net = new brain.recurrent.LSTM()

net.train([

{input:'I am happy', output:'happy'},

{input : 'I feel great', output:'happy'},

{input:'happy yeah', output:'happy'},

{input:'sad', output:'sad'} ])

const output= net.run('I am happy')

alert(output)

