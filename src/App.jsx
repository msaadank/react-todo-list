import { useEffect, useState } from 'react'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import './App.css'
import EditTodo from './components/EditTodo';
import {v4 as uuidv4} from 'uuid';

function getLocalItems(){
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'));
  }else{
    return [];
  }
}

function App() {

  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState(getLocalItems());

  function changeHandler({target}){
    const {name, value} = target;
    setNewTask((prevTask) => {
      return {...prevTask, id: uuidv4(), [name]: value, completed: false, isEditing: false}
    })
  }

  function tasksHandler(event){
    event.preventDefault()
    if(!newTask.title){
      return
    }
    setAllTasks((prev) => ([newTask, ...prev]));
    setNewTask({});
  }

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };

  const completeHandler = (todo) => {
    setAllTasks(
      allTasks.map((item) => {
        if(item.id === todo.id){
          return {...item, completed: !item.completed}
        }
        return item;
      })
      
    )
  }

  const editHandler = (id) => {
    setAllTasks(allTasks.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
  }
  const editTask = (title, id) => {
    setAllTasks(allTasks.map((todo) => {
      if(todo.id === id){
        return {...todo, title, isEditing: !todo.isEditing}
      }
      return todo
    }))
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(allTasks))
  }, [allTasks]);

  return(
    <div>
      <h1>Todo List</h1>
      <NewTodo newTask={newTask} submit={tasksHandler} changeHandler={changeHandler}/>
      {allTasks.map((task) => 
                task.isEditing ? (
                  <EditTodo editTask={editTask} task={task}/>
                ) : (
                  <TodoList task={task} 
                  handleDelete={handleDelete} 
                  onComplete={completeHandler}
                  handleEdit={editHandler}/>
                ))}
    </div>
  )

}

export default App
