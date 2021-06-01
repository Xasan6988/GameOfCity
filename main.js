let field   = document.querySelector('#field');
let message = document.querySelector('#message');
let score = document.querySelector('.score');
let result = [];
let lastSym = '';
let i = 0;

const isValidCity = (newCity, oldCity = newCity) => {
  if (result.length != 0) {
    return newCity.toLowerCase().charAt(0) === oldCity.toLowerCase().charAt(oldCity.length - 1);
  } else {
    return true;
  }
};

const isNewCity = newCity => {
  return result.indexOf(newCity) === -1;
};

field.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    if (isValidCity(field.value, result[result.length - 1]) && isNewCity(field.value)) {
      result.push(field.value);
      lastSym = field.value.charAt(field.value.length - 1);
      message.textContent = `Слово принято! Следующее слово должно быть на букву \"${lastSym}\"`;
      field.value = '';
      score.textContent = ++i;
    } else if (!isNewCity(field.value)) {
      message.textContent = `Такой город уже есть! Введите другой город, начинающийся на букву \"${lastSym}\"`;
    } else if (!isValidCity(field.value, result[result.length - 1])) {
      message.textContent = `Вы ввели неверный город! Вам нужно ввести город, который начинается на букву \"${lastSym}\"`;
    }
  }
});


