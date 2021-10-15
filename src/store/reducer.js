import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST,
} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}
// state存放的是整个图书馆所有书籍的信息（可以看成这样
// reducer可以接受state，但是绝不能修改state
export default (state = defaultState, action) => { 
  const {type} = action;
  // const newState = JSON.parse(JSON.stringify(state));
  if(type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  } 
  if(type === INIT_LIST){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.value;
    return newState;
  }
  if(type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if(type === INIT_LIST){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.value;
    return newState;
  }
  return state;
};