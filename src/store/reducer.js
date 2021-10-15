import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}
// state存放的是整个图书馆所有书籍的信息（可以看成这样
// reducer可以接受state，但是绝不能修改state
export default (state = defaultState, action) => { 
  const {type, value} = action;
  const newState = JSON.parse(JSON.stringify(state));
  if(type === CHANGE_INPUT_VALUE){
    newState.inputValue = value;
    return newState;
  } 
  if(type === ADD_TODO_ITEM){
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(type === DELETE_TODO_ITEM){
    newState.list.splice(value, 1);
    return newState;
  }
  return state;
}