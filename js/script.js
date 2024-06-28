const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const countSpan = document.getElementById('count');

let count = 1;

decreaseButton.addEventListener('click', () => {
  if (count > 1) {
    count--;
    countSpan.textContent = count;
  }
});

increaseButton.addEventListener('click', () => {
  if (count < 6) {
    count++;
    countSpan.textContent = count;
  }
});




const counterMinus2 = document.querySelector('.input-container-2 .counter-minus');
const counterPlus2 = document.querySelector('.input-container-2 .counter-plus');
const counterValue2 = document.querySelector('.input-container-2 .counter-value');

counterMinus2.addEventListener('click', () => {
  const currentValue2 = parseInt(counterValue2.value);
  if (currentValue2 > 1) {
    counterValue2.value = currentValue2 - 1;
  }
});

counterPlus2.addEventListener('click', () => {
  const currentValue2 = parseInt(counterValue2.value);
  if (currentValue2 < 10) {
    counterValue2.value = currentValue2 + 1;
  }
});






const dateInput = document.getElementById("date-input");
const dateError = document.getElementById("date-error");

dateInput.addEventListener("input", function() {
  const dateValue = dateInput.value.trim();
  const dateArray = dateValue.split(" ");

  if (dateArray.length !== 2) {
    dateError.textContent = "Введите две даты";
  } else {
    const isValidDate = dateArray.every(function(date) {
      const day = parseInt(date.substring(0, 2));
      const month = parseInt(date.substring(3, 5));
      const year = parseInt(date.substring(6));

      if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
      }

      const dateObject = new Date(year, month - 1, day);

      return dateObject.getFullYear() === year &&
             dateObject.getMonth() === month - 1 &&
             dateObject.getDate() === day;
    });

    if (!isValidDate) {
      dateError.textContent = "Неверный формат даты";
    } else {
      dateError.textContent = "";
    }
  }
});




const button = document.querySelector('.search-button.search-button-2');
const card = document.querySelector('#card-1');

button.addEventListener('click', () => {
  card.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});



const catalogLink = document.querySelector('.footer-link:first-child');

catalogLink.addEventListener('click', function(event) {
  event.preventDefault();

  const card = document.querySelector('#card-1');

  if (card) {
    card.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});



const catalogButton = document.querySelector('.button.catalog-button');

catalogButton.addEventListener('click', function(event) {
  event.preventDefault();

  const card = document.querySelector('#card-1');

  if (card) {
    card.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});


window.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); //Масштабируем страницу после загрузки

function AutoScale()
{
    let width = window.innerWidth; //Ширина окна
    //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

    if(width > 1280)
    {
   	 ChangeScale("big");
    }
    else if(width <= 1280 && width > 720)
    {
   	 ChangeScale("normal");
    }
    else if(width < 720)
    {
   	 ChangeScale("small");
    }
}