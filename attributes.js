console.log('attribute')

const h1Element = document.querySelector('h1');

h1Element.id = '128736'; // gammel måte
h1Element.setAttribute('id', 'idbyset'); // beste praksis

console.log(h1Element);

const pElement = document