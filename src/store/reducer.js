const defaultState = {
  inputValue: '',
  list: []
}
// state存放的是整个图书馆所有书籍的信息（可以看成这样
// reducer可以接受state，但是绝不能修改state
export default (state = defaultState, action) => { 
  const {type, value} = action;
  const newState = JSON.parse(JSON.stringify(state));
  if(type === 'change_input_value'){
    newState.inputValue = value;
    return newState;
  } 
  if(type === 'add_todo_item'){
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState
  }
  return state;
}