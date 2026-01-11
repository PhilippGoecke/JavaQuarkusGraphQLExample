import React, { useState } from 'react';
import './TodoList.css';

function TodoList({ todos, onToggleTodo, onDeleteTodo, onUpdateTodo }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditDescription(todo.description || '');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditDescription('');
  };

  const saveEdit = (id) => {
    onUpdateTodo(id, editTitle, editDescription);
    cancelEdit();
  };

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>🎉 No todos yet! Add one to get started.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          {editingId === todo.id ? (
            <div className="edit-form">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="edit-title"
              />
              <input
                type="text"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="edit-description"
                placeholder="Description"
              />
              <div className="edit-actions">
                <button onClick={() => saveEdit(todo.id)} className="save-btn">
                  💾 Save
                </button>
                <button onClick={cancelEdit} className="cancel-btn">
                  ✖ Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="todo-content" onClick={() => onToggleTodo(todo.id)}>
                <div className="checkbox">
                  {todo.completed && <span className="checkmark">✓</span>}
                </div>
                <div className="todo-text">
                  <div className="todo-title">{todo.title}</div>
                  {todo.description && (
                    <div className="todo-description">{todo.description}</div>
                  )}
                </div>
              </div>
              <div className="todo-actions">
                <button
                  onClick={() => startEdit(todo)}
                  className="edit-btn"
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  onClick={() => onDeleteTodo(todo.id)}
                  className="delete-btn"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
