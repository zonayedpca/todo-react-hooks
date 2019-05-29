import React from 'react';

const Contents = ({ todos, onComplete, onRemove }) => {
  return (
    <div className="todo-content">
      <ul>
        { todos.length ? todos.map((todo, index) => (
          <li key={index} onClick={onComplete.bind(this, index)} className={`todo ${todo.done ? 'completed': ''}`}>{todo.text} <span onClick={(e) => onRemove(e, index)} className="remove">remove</span></li>
        )) : <li className="no-todo">Nothing to show</li> }
      </ul>
    </div>
  )
}

export default Contents;
