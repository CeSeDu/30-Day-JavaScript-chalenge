
let challenge =  '30 Days Of JavaScript'
console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substr(3,5))

console.log(challenge.substring(3,7))

console.log(challenge.split(''))

console.log(challenge.includes(String))
;

let socialMedia = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(socialMedia.split(","));

let days = '30 Days Of JavaScript'
console.log(days.replace('JavaScript','Python'))

let day = '30 Days Of JavaScript'
console.log(day.charAt(15))

console.log(day.charCodeAt(11))

console.log(day.indexOf('JavaScript'))

console.log(day.lastIndexOf('Script')) ;

let first = 'You cannot end a sentence with because because because is a conjunction'
console.log(first.indexOf('Y'))

console.log(first.lastIndexOf('conjunction'))

console.log(first.search('You'));


let clean = '     30 Days Of JavaScript     '
console.log(clean.trim(' '))

console.log(clean.startsWith('  '))

console.log(clean.endsWith('  '))

console.log(clean.match('a')); //burayı anlamadım????


let first2 = '30 Days Of'
console.log(first2.concat(' JavaScript'));

let first3 = " 30 Days Of JavaScript"
console.log(first3.repeat(2))



