// ФУНКЦИЯ ОТРИСОВКИ КАЛЕНДАРЯ В HTML

function drawCalendar(year = currentYear, mon = currentMonth, htmlElem = calendar){

    showCurrentDate(currentMonth, currentYear); // показываем выбранную дату (месяц, год) в html 
    
    const month = mon;

    const day = new Date(year, month);

    // ничинаем рисовать таблицу-календарь

    let table = '<table class = "calendar"><tr><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th class = "weekend">SAT</th><th class = "weekend">SUN</th></tr><tr>'

    let firstDayOfMonth = getDayOfTheWeek(day);

    // рисуем пустые ячейки таблицы до начала выбранного месяца
    
    for(let i = 0; i < firstDayOfMonth - 1; i++) {
      table += '<td></td>';
    }
 
    // заполняем дни выбранного месяца

    while(day.getMonth() == month) {
      
      switch(true) {
        
        case (month === now.getMonth() && year === currentYear) && (day.getDate() === new Date().getDate() && (getDayOfTheWeek(day) === 6 || getDayOfTheWeek(day) === 7)):
          table += `<td id = ${day.getDate()} class = "weekend current-day">` + day.getDate() + '</td>';
          break;

        case (month === now.getMonth() && year === currentYear) && (day.getDate() === new Date().getDate()):
          table += `<td id = ${day.getDate()} class = "current-day">` + day.getDate() + '</td>';
          break;

        case (getDayOfTheWeek(day) === 6 || getDayOfTheWeek(day) === 7):
          table += `<td id = ${day.getDate()} class = "weekend">` + day.getDate() + '</td>';
          break;

        default:
          table += `<td id = ${day.getDate()}>` + day.getDate() + '</td>'
      }

      let k = new Date(year, month + 1, 0);
      let l = day.getDate();
      let s = k.getDate()

      if (getDayOfTheWeek(day) % 7 == 0 && l !== s) { //  перевод строки после каждого воскресенья, кроме воскресенья, которое является последним днем месяца
          table += '</tr><tr>';
      }

      day.setDate(day.getDate() + 1);
    }

    // рисуем пустые ячейки, чтобы придать таблице правильную форму

    let lastDayOfMonth = getDayOfTheWeek(day) - 1;

    if(lastDayOfMonth !== 0) {
      for(let i = lastDayOfMonth; i < 7; i++) {
        table += '<td></td>';
      }
    }

    // закрываем таблицу
    
    table += '</tr></table>'

    htmlElem.innerHTML = table;
};

// ФУНКЦИЯ УСТАНОВКИ ВС ПОСЛЕДНИМ ДНЕМ НЕДЕЛИ

function getDayOfTheWeek(date) { 
  let d = date.getDay();
  
  if(d == 0) {
      d = 7;
    }
  
  return d;
}