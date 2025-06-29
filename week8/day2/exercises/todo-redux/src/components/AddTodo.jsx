import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { addTodo } from '../redux/actions'; 

function AddTodo({ addTodo }) { // La fonction addTodo est passée via les props grâce à connect
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return; 
    }
    addTodo(input); 
    setInput(''); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
        style={{ flexGrow: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '4px 0 0 4px' }}
      />
      <button
        type="submit"
        style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}
      >
        Add Task
      </button>
    </form>
  );
}

// mapDispatchToProps : Mappe les action creators aux props du composant
const mapDispatchToProps = (dispatch) => ({
  // La prop 'addTodo' du composant appellera dispatch(addTodo(text))
  addTodo: (text) => dispatch(addTodo(text)),
});

// connecte le composant AddTodo au store Redux
// Le premier argument est mapStateToProps (non utilisé ici, donc null)
// Le second argument est mapDispatchToProps
export default connect(null, mapDispatchToProps)(AddTodo);