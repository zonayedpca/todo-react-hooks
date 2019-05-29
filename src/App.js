import React, { useState, useEffect } from 'react';

import New from './components/New';
import Contents from './components/Contents';

import './App.css';

const App = () => {
  const [title, setTitle] = useState('React Todo with Hooks')
  const [todos, setTodos] = useState([
    {
      text: 'Something to do',
      done: false
    }, {
      text: 'Some other things to do',
      done: false
    }, {
      text: 'Nothing to do',
      done: false
    }
  ]);

  useEffect(() => {
    setDocumentTitle(title)
    setTimeout(() => {
      setTitle('Todo App')
    }, 2000);
  });

  const setDocumentTitle = title => {
    document.title = `${title} - A Simple React App(Created with Hooks)`;
  }

  const addNewTodo = (e, text, onDone) => {
    e.preventDefault();
    if(text) {
      let newTodos = [...todos];
      newTodos = [...newTodos, { text, done: false }];
      setTitle(`New Todo: '${text}' Added`);
      setTodos(newTodos);
      onDone();
    }
  }

  const onComplete = index => {
    const newTodos = [...todos];
    const isDone = todos[index].done;
    newTodos[index].done = !isDone;
    setTitle(`Todo: '${todos[index].text}' is ${!isDone ? 'completed': 'not completed'}`);
    setTodos(newTodos);
  }

  const onRemove = (e, index) => {
    e.stopPropagation();
    const newTodos = [...todos];
    const removedTodo = newTodos.splice(index, 1);
    setTitle(`Todo: '${removedTodo[0].text}' is removed`);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="todo-area">
        <New addNewTodo={addNewTodo} />
        <Contents todos={todos} onComplete={onComplete} onRemove={onRemove} />
      </div>
      <div className="footer-area">
        <p>Simple Todo Created by <a target="_blank" rel="noopener noreferrer" href="//zonayed.me">Zonayed Ahmed</a></p>
      </div>
    </div>
  );
}

export default App;
