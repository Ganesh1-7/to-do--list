import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Finish React project", completed: false },
    { id: 2, text: "Go for a 20min run", completed: true }
  ]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      {/* Background Decor */}
      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>

      <div style={styles.card}>
          <h1 style={styles.title}>Day <span style={{color: '#6366f1'}}>Plan</span></h1>
          <p style={styles.date}>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
        </div>

        <form onSubmit={addTodo} style={styles.inputGroup}>
          <input 
            style={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
          />
          <button type="submit" style={styles.addButton}>Add</button>
        </form>


        <div style={styles.list}>

          {todos.map(todo => (

            <div key={todo.id} style={styles.todoItem}>

              <div 

                onClick={() => toggleTodo(todo.id)}

                style={{

                  ...styles.checkbox,
                  backgroundColor: todo.completed ? '#6366f1' : 'transparent',

                  borderColor: todo.completed ? '#6366f1' : '#475569'

                }}

              >

                {todo.completed && '✓'}

              </div>
              <span style={{
                ...styles.todoText,
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#64748b' : '#f1f5f9'
              }}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)} style={styles.deleteBtn}>✕</button>
            </div>
          ))}
        </div>
      </div>
    
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    fontFamily: 'Inter, system-ui, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  circle1: {
    position: 'absolute',
    top: '10%',

    left: '15%',

    width: '300px',

    height: '300px',
    background: 'rgba(99, 102, 241, 0.15)',

    borderRadius: '50%',

    filter: 'blur(80px)',
    width: '250px',

  },

  circle2: {
    position: 'absolute',

    bottom: '10%',
    right: '15%',

    height: '250px',
    background: 'rgba(236, 72, 153, 0.15)',

    borderRadius: '50%',
    filter: 'blur(80px)',

  },
  card: {

    width: '100%',
    maxWidth: '400px',

    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(12px)',

    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',

    padding: '32px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',

    zIndex: 1,

  },
  header: { textAlign: 'center', marginBottom: '24px' },

  title: { fontSize: '28px', color: '#fff', margin: 0, fontWeight: '800' },
  date: { color: '#64748b', fontSize: '14px', marginTop: '4px' },

  inputGroup: { display: 'flex', gap: '8px', marginBottom: '24px' },
  input: {

    flex: 1,
    background: 'rgba(255,255,255,0.05)',

    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '12px 16px',

    color: '#fff',
    outline: 'none',
  },

  addButton: {

    background: '#6366f1',
    border: 'none',

    color: '#fff',
    padding: '0 20px',
    borderRadius: '12px',

    fontWeight: 'bold',
    cursor: 'pointer',

  },

  list: { display: 'flex', flexDirection: 'column', gap: '12px' },

  todoItem: {
    display: 'flex',

    alignItems: 'center',

    background: 'rgba(255,255,255,0.02)',
    padding: '12px',

    borderRadius: '14px',
    border: '1px solid rgba(255,255,255,0.05)',

  },

  checkbox: {
    width: '20px',

    height: '20px',
    borderRadius: '6px',

    border: '2px solid',
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '12px',
    color: '#fff',

    cursor: 'pointer',
    marginRight: '12px',
  },

  todoText: { flex: 1, fontSize: '15px' },
  deleteBtn: {
    background: 'transparent',
    border: 'none',
    color: '#475569',
    cursor: 'pointer',
    fontSize: '16px',
  }
};

export default App;