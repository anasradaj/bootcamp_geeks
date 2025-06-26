import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  tasks: [],

};

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(), 
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: !task.completed } : task
        ),
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
        ),
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const valueToProvide = { state, dispatch };

  return (
    <TaskContext.Provider value={valueToProvide}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);