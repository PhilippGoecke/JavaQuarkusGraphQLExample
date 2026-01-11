import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onCreateTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onCreateTodo(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="description-input"
        />
      </div>
      <button type="submit" className="add-btn">
        ➕ Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
