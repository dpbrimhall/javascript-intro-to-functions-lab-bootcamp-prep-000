function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}


function logShout(string) {
  console.log(string.toUpperCase())
}
logShout('hello')

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logWhisper('HELLO')


function sayHiToGrandma(string) {
  var lowercase = 'hello'
  var uppercase = 'HELLO'
  if (string.toLowerCase() === lowercase) {
    return "I can't hear you!"
  
  else {
    return "I love you, too."
  }
}
 
 
sayHiToGrandma('hello')
sayHiToGrandma('I love you, Grandma.')

 