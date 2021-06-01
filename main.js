let field   = document.querySelector('#field');
let message = document.querySelector('#message');
let score = document.querySelector('.score');
let result = [];
let lastSym = '';
let i = 0;

const isValidCity = (newCity, oldCity = newCity) => {
  if (result.length != 0) {
    let newCitySym = newCity.toLowerCase().charAt(0);
    let oldCitySym = oldCity.toLowerCase().charAt(oldCity.length - 1);
    console.log(oldCitySym);
    if (oldCitySym === 'ь' || oldCitySym === 'ъ' || oldCitySym === 'ы') {
      oldCitySym = oldCity.toLowerCase().charAt(oldCity.length - 2);
    }
    console.log(oldCitySym);
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
      result.push(field.value);
      lastSym = field.value.charAt(field.value.length - 1);
      if (lastSym === 'ь' || lastSym === 'ъ' || lastSym === 'ы') {
        lastSym = field.value.charAt(field.value.length - 2)
      }
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


