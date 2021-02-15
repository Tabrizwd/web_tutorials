let phrases = [
    'отправить другу смешную гифку',
    'посмотреть скидки на авиабилеты',
    'разобраться, о чём поют рэперы',
    'Юрий Дудь',
    'расставить книги на полке по цвету',
    'читать про зарплаты в Сан-Франциско'
  ];

  function getRandomElement () {
    
    let randIndex = Math.floor(Math.random() * phrases.length);
console.log(randIndex);
document.getElementById("demo").innerHTML=phrases[randIndex];
}
getRandomElement();