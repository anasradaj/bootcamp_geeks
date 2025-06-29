import { ADD_TASK, EDIT_TASK, DELETE_TASK, SELECT_DAY, TOGGLE_TASK, SET_ACCENT_COLOR } from './actions';

const accentColors = ['#4A90E2', '#50E3C2', '#9013FE', '#F8E71C', '#BD10E0', '#FF2D55', '#4CD964'];

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Mois commence à 0
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// État initial (Initial State)
// tasksByDay: un objet où chaque clé est une date (ex: "2025-06-26") et la valeur est un tableau de tâches pour ce jour.
// selectedDay: le jour actuellement sélectionné.
const initialState = {
  tasksByDay: {},
  selectedDay: getTodayDate(),
  currentAccentColor: accentColors[Math.floor(Math.random() * accentColors.length)],
};

// Le Reducer principal
function plannerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      const { day: addDay, task: newTask } = action.payload;
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [addDay]: [...(state.tasksByDay[addDay] || []), newTask], 
        },
      };

    case EDIT_TASK:
      const { day: editDay, taskId: editTaskId, newText } = action.payload;
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [editDay]: state.tasksByDay[editDay] ? state.tasksByDay[editDay].map(task =>
            task.id === editTaskId ? { ...task, text: newText } : task
          ) : [], // S'assure que le tableau existe avant de mapper
        },
      };

    case DELETE_TASK:
      const { day: deleteDay, taskId: deleteTaskId } = action.payload;
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [deleteDay]: state.tasksByDay[deleteDay] ? state.tasksByDay[deleteDay].filter(task =>
            task.id !== deleteTaskId
          ) : [],
        },
      };

    case SELECT_DAY:
      return {
        ...state,
        selectedDay: action.payload.day,
    };

    case TOGGLE_TASK: {
      const { day, taskId } = action.payload;
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: state.tasksByDay[day]
            ? state.tasksByDay[day].map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
              )
            : [],
        },
      };
    }
    case SET_ACCENT_COLOR: // <-- Nouvelle action
      return {
        ...state,
        currentAccentColor: action.payload.color,
      };

    default:
      return state;
  }
}

export default plannerReducer;