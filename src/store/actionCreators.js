import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST,
} from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

const initListAction = (value) => ({
  type: INIT_LIST,
  value
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((res) => {
      const data = res.data;
      console.log(data);
      const action = initListAction(data);
      dispatch(action);
    })
  }
}


