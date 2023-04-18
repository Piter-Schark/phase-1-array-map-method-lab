const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(titles => {
//   return titles
//   .split(' ')
//   .map((word) => word[0].toUppercase() + word.slice(1))
//   .join(' ')
// })

// function titleCased () {
//  return tutorials.map(titles)
// }

// function titleCased () {
//   const titleCased = tutorials.map(titles => {
//     return titles
//     .split(' ')
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(' ')
//   })
//   return titleCased
// }

const titleCased = () => {
  return tutorials.map(titles => {
    return titles
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
  })
} 