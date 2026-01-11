import React, { useState, useEffect } from 'react';
import './App.css';
import { graphQLClient, queries } from './graphql';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await graphQLClient.request(queries.getAllTodos);
      setTodos(data.allTodos || []);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCreateTodo = async (title, description) => {
    try {
      await graphQLClient.request(queries.createTodo, { title, description });
      await fetchTodos();
    } catch (err) {
      setError('Failed to create todo: ' + err.message);
      console.error(err);
    }
  };

  const handleToggleTodo = async (id) => {
    try {
      await graphQLClient.request(queries.toggleTodo, { id: parseInt(id) });
      await fetchTodos();
    } catch (err) {
      setError('Failed to toggle todo: ' + err.message);
      console.error(err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await graphQLClient.request(queries.deleteTodo, { id: parseInt(id) });
      await fetchTodos();
    } catch (err) {
      setError('Failed to delete todo: ' + err.message);
      console.error(err);
    }
  };

  const handleUpdateTodo = async (id, title, description) => {
    try {
      await graphQLClient.request(queries.updateTodo, { 
        id: parseInt(id), 
        title, 
        description 
      });
      await fetchTodos();
    } catch (err) {
      setError('Failed to update todo: ' + err.message);
      console.error(err);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>📝 Todo App</h1>
        <p className="subtitle">Powered by Quarkus GraphQL & React</p>
        
        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError(null)} className="close-btn">×</button>
          </div>
        )}
        
        <TodoForm onCreateTodo={handleCreateTodo} />
        
        {loading ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <TodoList
            todos={todos}
            onToggleTodo={handleToggleTodo}
            onDeleteTodo={handleDeleteTodo}
            onUpdateTodo={handleUpdateTodo}
          />
        )}
        
        <div className="stats">
          <span>{todos.filter(t => !t.completed).length} active</span>
          <span>{todos.filter(t => t.completed).length} completed</span>
          <span>{todos.length} total</span>
        </div>
      </div>
    </div>
  );
}

export default App;
