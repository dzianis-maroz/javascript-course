import Calendar from './classCalendar';

import './styles';

const divForCalendar = document.getElementById('calendar');
const buttonMonthBack = document.getElementById('monthBack'); 
const buttonMonthForward = document.getElementById('monthForward');
const monthNameAndYearNumber = document.getElementById('monthNameAndYearNumber');


const now = new Date();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();


const calendar = new Calendar(currentYear, currentMonth, divForCalendar, monthNameAndYearNumber);

buttonMonthForward.addEventListener('click', calendar.monthCounterIncrement.bind(calendar));
buttonMonthBack.addEventListener('click', calendar.monthCounterDecrement.bind(calendar));

calendar.drawCalender();