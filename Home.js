import React,{useState} from 'react'
import {v4 as uuidv4} from "uuid";
import Todos from './Todos';
import style from './home.module.css';
import NewTodo from './NewTodo';

 const dummyTodos = [

  {
    id : 1,
    title : "This is the title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed scelerisque ante. Nam gravida, nulla nec posuere rutrum, libero diam sodales arcu, sed viverra elit neque eu arcu.  "
  },
  {
    id : 1,
    title : "This is the title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed scelerisque ante. Nam gravida, nulla nec posuere rutrum, libero diam sodales arcu, sed viverra elit neque eu arcu.  "
  }

 ]
const Home = () => {

  const [todos, setTodos]= useState([]);
  const handleAddTodo = (todo) => {

    setTodos((prevTodos) => {
     return[...prevTodos, {id : uuidv4(), todo}]
    });
    console.log(todos);
   
  };


  
    
    
    setTodos((prevTodos) => {
      const filteredTodos= prevTodos.filter((todo) =>  todo.id ===id)
      return filteredTodos;
    })
  
  return (
    <div className={style.container}>
        <h1>ToDo</h1>
        <NewTodo onAddTodo={handleAddTodo}></NewTodo>
      <Todos todos={dummyTodos} />
    </div>
  );
};

export default Home;