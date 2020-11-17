export default class ToDoList {
    constructor(htmlElem) {
        this.htmlElem = htmlElem;
        this.model = JSON.parse(localStorage.getItem("model")) || [];
    };
  
    addTask(value) {
        const task = {
        value,
        createdAt: {
          value: +new Date(), 
          label: new Date(),
        } 
    };
        this.model.push(task); // добавляем элемент (объект) в массив
        localStorage.setItem("model", JSON.stringify(this.model)); // обновляем localStorage
    };
  
    render(data = this.model) { // отрисовываем в верстке актуальный массив объектов
  
        this.htmlElem.innerHTML = '';
        
        for(let i = 0; i < data.length; i++) {
        
        const toDo = document.createElement('p');
        const deleteButton = document.createElement('span');
        const toDoDate = document.createElement('span');
        
        toDo.innerText = data[i].value;
        toDoDate.innerText = 'Added on: ' + data[i].createdAt.label;
        deleteButton.innerText = 'X';
        deleteButton.setAttribute('data-num', i); //присваиваем аттрибут data-num, равный порядковому номеру элемента массива
      
        this.htmlElem.append(toDo); //добавляем Задание (<p>), кнопку Delete и Дату в верстку
        toDo.append(deleteButton);
        toDo.append(toDoDate); 
    
        toDo.className = 'styleOfTasks';
        deleteButton.className = 'delete';
        toDoDate.className = 'date';
      } 
    };
  };

  