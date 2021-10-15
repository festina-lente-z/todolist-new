import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { 
  Input,
  Button,
  List,
} from 'antd';
import store from './store/index';
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from './store/actionTypes';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // 订阅
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render(){
    return(
      <div style={{marginTop: "10px", marginLeft: "10px"}}>
        <div>
          <Input 
            placeholder="todo info" 
            style={{width: "300px", marginRight: "10px"}}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button 
            type="primary" 
            onClick={this.handleBtnClick}
          >
            提交
          </Button>
        </div>
        <List
          style={{marginTop: "10px", width: "300px"}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => 
            <List.Item
              key={index}
              onClick={this.handleItemDelete.bind(this,index)}
            >
              {item}
            </List.Item>
          }
        />
      </div> 
    )
  }
  handleStoreChange(){
    // 当感知到store发生变化的时候，旧调用store.getState()方法，从store里面重新取一次数据
    this.setState(store.getState());
  }
  handleInputChange(e){
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleBtnClick(){
    const action = {
      type: ADD_TODO_ITEM,
    }
    store.dispatch(action);
  }
  handleItemDelete(index){
    const action = {
      type: DELETE_TODO_ITEM,
      value: index
    }
    store.dispatch(action);
  }
}

export default TodoList;