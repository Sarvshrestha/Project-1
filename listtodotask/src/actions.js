// src/actions.js
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
 
export const EDIT_TASK = 'EDIT_TASK';
 
export const addTask = (taskData) => {
  return {
    type: ADD_TASK,
    payload: taskData,
  };
};
 
export const deleteTask = (taskId) => {
 
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};
 
 
 
// In actions.js
export const editTask = (taskId, updatedData) => {
   console.log('testtaskId',taskId);
  return {
    type: EDIT_TASK,
    payload: {
      id: taskId,
      updatedData: updatedData,
    },
  };
};