import { combineReducers } from 'redux';
import Developer from '../data/Developer';
 
 
 
const initialState = {
  tasks: Developer,
  editTaskId: null,
 
};
 
const reducer = (state = initialState.tasks, action) => {
 
  switch (action.type) {
 
    case 'ADD_TASK':
      return {
        ...state,
        Developer: [...state.Developer, action.payload],
      };
      case 'DELETE_TASK':
      return {
        ...state,
        Developer: state.Developer.filter(item => item.id !== action.payload),
      };
 
      case 'EDIT_TASK':
        const updatedTasks = state.Developer.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload.updatedData } : item
        );
        console.log("Updated Tasks:", updatedTasks);
        return {
          ...state,
          Developer: updatedTasks,
          // editTaskId: null,
          // Developer:[...state.Developer, action.payload]
        };
        
      default:
        return state;
    }
  };
 
const rootReducer = combineReducers({
  tasks: reducer,
 
});
 
export default rootReducer;