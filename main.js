let field   = document.querySelector('#field');
let message = document.querySelector('#message');
let score = document.querySelector('.score');
let result = [];
let lastSym = '';
let i = 0;

const isValidCity = (city1, city2 = city1) => {
  let newCity = city1.toLowerCase();
  let oldCity = city2.toLowerCase();
  if (result.length != 0) {
    let newCitySym = newCity.charAt(0);
    let oldCitySym = oldCity.charAt(oldCity.length - 1);
    if (oldCitySym === 'ь' || oldCitySym === 'ъ' || oldCitySym === 'ы') {
      oldCitySym = oldCity.charAt(oldCity.length - 2);
    }
    return  newCitySym === oldCitySym;
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
      result.push(field.value.trim());
      lastSym = field.value.charAt(field.value.trim().length - 1);
      if (lastSym === 'ь' || lastSym === 'ъ' || lastSym === 'ы') {
        lastSym = field.value.trim().charAt(field.value.trim().length - 2);
      }
      message.textContent = `Слово принято! Следующее слово должно быть на букву \"${lastSym}\"`;
      field.value = '';
      score.textContent = ++i;
    } else if (!isNewCity(field.value.trim())) {
      message.textContent = `Такой город уже есть! Введите другой город, начинающийся на букву \"${lastSym}\"`;
    } else if (!isValidCity(field.value.trim(), result[result.length - 1])) {
      message.textContent = `Вы ввели неверный город! Вам нужно ввести город, который начинается на букву \"${lastSym}\"`;
    }
  }
});


