import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ERROR,
  GET_USER_TODOS,
  GET_USER_TODOS_ERROR,
  UPDATE_TODO_BY_ID_ERROR,
  DELETE_TODO_BY_ID_ERROR,
} from '../types';

import axios from 'axios';



export const getAllTodos = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/todos');
    dispatch({ type: GET_ALL_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ALL_TODOS_ERROR, payload: e });
  }
};


export const getUserTodos = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/user/todos', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_USER_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: GET_USER_TODOS_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again' });
  }
}


export const updateCompleteUserTodoById = (e,id, completed, text) => async dispatch => {
  e.stopPropagation();
  try {
    await axios.put(`/api/user/todos/${id}`, { completed: !completed, text}, { headers: { 'authorization': localStorage.getItem('token') }});
    const { data } = await axios.get('/api/user/todos', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_USER_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: UPDATE_TODO_BY_ID_ERROR, payload: e });
  }
};


export const deleteTodoById = id => async dispatch => {
  try {
    await axios.delete(`/api/user/todos/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
    const { data } = await axios.get('/api/user/todos', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_USER_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: DELETE_TODO_BY_ID_ERROR, payload: e });
  }
}
