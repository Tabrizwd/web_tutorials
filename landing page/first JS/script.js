let phrases = [
  'отправить другу смешную гифку',
  'посмотреть скидки на авиабилеты',
  'разобраться, о чём поют рэперы',
  'Юрий Дудь',
  'расставить книги на полке по цвету',
  'читать про зарплаты в Сан-Франциско'
];

function getRandomElement(arr) {
  return randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex]; 
}
let randomElement = getRandomElement(phrases);
console.log(randomElement);
let buttonElement = document.querySelector('.button')
let button
let adviceElement = document.querySelector('.advice');
let advice
let phraseElement = document.querySelector('.phrase');
let phrase
let imageElement = document.querySelector('.image');
let image
phrase.textContent = getRandomElement(phrases);