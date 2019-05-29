import React, { useState } from 'react';

const New = ({ addNewTodo }) => {
  const [input, setIntput] = useState('');
  const [visible, setVisible] = useState(false);

  const onDone = () => {
    setIntput('');
  }

  const handleVisibility = () => {
    setVisible(!visible);
  }

  return (
    <form onSubmit={(e) => addNewTodo(e, input, onDone)}>
      {visible ? <input
        placeholder="What to do?"
        value={input}
        onChange={(e) => setIntput(e.target.value)}
      /> : <h2>Todo List</h2>}
      <div className="action">
        {!visible ? <span onClick={handleVisibility} className="show">+</span>
        : <span onClick={handleVisibility} className="hide">-</span>}
      </div>
    </form>
  )
}

export default New;
