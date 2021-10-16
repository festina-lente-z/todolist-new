import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getInputValue,
  addItem,
  deleteItem
} from './store/actionCreators';

const TodoList = (props) => {
  const {
    inputValue,
    list,
    changeInputValue,
    handleClick,
    handleDelete
  } = props;
  return (
    <div>
      <div>
        <input 
          value={inputValue}
          onChange={changeInputValue}
        />
        <button
          onClick={handleClick}
        >提交</button>
      </div>
      <ul>
        {
          list.map((item,index) => {
            return (<li 
              key={index}
              onClick={()=>{handleDelete(index)}}
            >
              {item}
            </li>)
          })
        }
      </ul>
    </div>
  )
}


// TodoList和store做连接的规则--mapStateToProps
// mapStateToProps--把store里的数据映射给这个组件变成组件的props
// state--指store里面的数据
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// 把store.dispatch挂载到props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e){
      const action = getInputValue(e.target.value);
      dispatch(action);
    },
    handleClick() {
      const action = addItem();
      dispatch(action);
    },
    handleDelete(index) {
      const action = deleteItem(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);