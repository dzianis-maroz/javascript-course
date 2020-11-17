import ToDoList from '../src/classToDoList';

import './styles';

const button = document.getElementById('button');
const input = document.getElementById('input');
const listOfTasks = document.getElementById('listOfTasks');
const select = document.getElementById('sort'); 
const filter = document.getElementById('filter'); 


const toDoList = new ToDoList(listOfTasks);

const handleClick = () => {
  if(input.value !== '') {
      const { value } = input;
      toDoList.addTask(value);
      toDoList.render(toDoList.model);
    } 
    else return;   
};

const handleDelete = (e) => { // удаление задания
    if(e.target.className === 'delete') {
        if(confirm('Вы уверены?')) {
            toDoList.model.splice(e.target.dataset.num, 1); // удаляем из массива по порядковому номеру соответствующий элемент
            localStorage.setItem("model", JSON.stringify(toDoList.model)); // обновляем localStorage
            toDoList.render(toDoList.model); // отрисовываем актуальный массив в врестке
        }       
}};

const sortBy = (e) => { // сортируем задания по имени и дате создания
    switch (e.target.value) {
      case "name":
      toDoList.model.sort((a, b) => {
          if (a > b) {
            return 1;
          } else if (a.value < b.value) {
            return -1;
          } else return 0;
        });
        break;
      case "date":
      toDoList.model.sort((a, b) => {
          if (+a.createdAt.value < +b.createdAt.value) {
            return 1;
          } else if (+a.createdAt.value > +b.createdAt.value) {
            return -1;
          } else return 0;
        });
        break;
    }
    toDoList.render(toDoList.model);
  };

  const getFiltredTasks = (e) => { // поиск по названию задания
    const { value: inputValue} = e.target;

    const filtredModel = toDoList.model.filter(
        function(item, i, arr) {
            return item.value.includes(inputValue);
        }   
    );
    toDoList.render(filtredModel);
};

button.addEventListener('click', handleClick);
listOfTasks.addEventListener('click', handleDelete);
select.addEventListener('change', sortBy);
filter.addEventListener('input', getFiltredTasks);

toDoList.render(toDoList.model);
console.log(toDoList.model)