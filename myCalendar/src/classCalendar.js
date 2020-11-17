export default class Calendar {
  
  constructor(year, month, htmlElemForCalendar, htmlElemForMonthAndYear) {
     this.year = year; 
     this.month = month;
     this.htmlElemForCalendar = htmlElemForCalendar;
     this.htmlElemForMonthAndYear = htmlElemForMonthAndYear;
     this.listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  };

  showChosenMonthAndYear() {
      this.htmlElemForMonthAndYear.innerText = `${this.listOfMonths[this.month]} ${this.year}`;
  };

  getDayOfTheWeek(date) {
      let d = date.getDay();
      if(d == 0) {
          d = 7;
          };
      return d;
  };

  drawCalender() {

      this.showChosenMonthAndYear(); // показываем выбранную дату (месяц, год) в html 
      
      const day = new Date(this.year, this.month);
  
      // ничинаем рисовать таблицу-календарь
  
      let table = '<table class = "calendar"><tr><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th class = "weekend">SAT</th><th class = "weekend">SUN</th></tr><tr>'
  
      let firstDayOfMonth = this.getDayOfTheWeek(day);
  
      // рисуем пустые ячейки таблицы до начала выбранного месяца
      
      for(let i = 0; i < firstDayOfMonth - 1; i++) {
        table += '<td></td>';
      }
   
      // заполняем дни выбранного месяца
  
      while(day.getMonth() == this.month) {
        
        switch(true) {
          
          case (this.month === new Date().getMonth() && this.year === new Date().getFullYear()) && (day.getDate() === new Date().getDate() && (this.getDayOfTheWeek(day) === 6 || this.getDayOfTheWeek(day) === 7)):
            table += `<td id = ${day.getDate()} class = "weekend current-day">` + day.getDate() + '</td>';
            break;
  
          case (this.month === new Date().getMonth() && this.year === new Date().getFullYear()) && (day.getDate() === new Date().getDate()):
            table += `<td id = ${day.getDate()} class = "current-day">` + day.getDate() + '</td>';
            break;
  
          case (this.getDayOfTheWeek(day) === 6 || this.getDayOfTheWeek(day) === 7):
            table += `<td id = ${day.getDate()} class = "weekend">` + day.getDate() + '</td>';
            break;
  
          default:
            table += `<td id = ${day.getDate()}>` + day.getDate() + '</td>'
        }
  
        let k = new Date(this.year, this.month + 1, 0);
        let l = day.getDate();
        let s = k.getDate()
  
        if (this.getDayOfTheWeek(day) % 7 == 0 && l !== s) { //  перевод строки после каждого воскресенья, кроме воскресенья, которое является последним днем месяца
            table += '</tr><tr>';
        }
  
        day.setDate(day.getDate() + 1);
      }
  
      // рисуем пустые ячейки, чтобы придать таблице правильную форму
  
      let lastDayOfMonth = this.getDayOfTheWeek(day) - 1;
  
      if(lastDayOfMonth !== 0) {
        for(let i = lastDayOfMonth; i < 7; i++) {
          table += '<td></td>';
        }
      }
  
      // закрываем таблицу
      
      table += '</tr></table>'
  
      this.htmlElemForCalendar.innerHTML = table;
  };

  monthCounterIncrement() {
      this.month += 1;
      if(this.month == 12) {
          this.month = 0;
          this.year += 1;
      };
      this.drawCalender();
    };
    
  monthCounterDecrement() {
      this.month -= 1;
      if(this.month == -1) {
          this.month = 11;
          this.year -= 1;
      };
      this.drawCalender();
    };
};
