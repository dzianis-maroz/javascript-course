const calendar = document.getElementById('calendar');
const buttonMonthBack = document.getElementById('monthBack'); 
const buttonMonthForward = document.getElementById('monthForward');
const listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthNameAndYearNumber = document.getElementById('monthNameAndYearNumber');

// ПОЛУЧАЕМ НАЧАЛЬНЫЕ ДАННЫЕ

const now = new Date();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();

// ФУНКЦИИ ПЕРЕКЛЮЧЕНИЯ (+/-) МЕСЯЦА

counterIncrement = () => {
  currentMonth += 1;
  if(currentMonth == 12) {
    currentMonth = 0;
    currentYear += 1;
  }
  drawCalendar(currentYear, currentMonth, calendar);
}

counterDecrement = () => {
  currentMonth -= 1;
  if(currentMonth == -1) {
    currentMonth = 11;
    currentYear -= 1;
  }
  drawCalendar(currentYear, currentMonth, calendar);
}

// ФУНКЦИИ ОТОБРАЖЕНИЯ ВЫБРАННОГО МЕСЯЦА И ГОДА

function showCurrentDate(currentMonth, currentYear) {
  monthNameAndYearNumber.innerText = `${listOfMonths[currentMonth]} ${currentYear}`;
}

buttonMonthForward.addEventListener('click', counterIncrement);
buttonMonthBack.addEventListener('click', counterDecrement);

drawCalendar(currentYear, currentMonth, calendar)


/* const path = require('path');

module.exports = {
    entry: '.src/calendar.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
} */