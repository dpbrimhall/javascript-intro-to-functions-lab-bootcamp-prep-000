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
  if (lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!" 
    
  }
}
 
 
sayHiToGrandma('hello')
sayHiToGrandma('HELLO')

 