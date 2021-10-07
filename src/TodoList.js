import React, { Component, Fragment } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '', // 存储input框中的内容
      list: [] // 存储列表中的每一项
    } // this.state组件的状态
  }
  render() {
    return(
      <Fragment>
        <div>
          <input 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button>submit</button>
        </div>
        <ul>
          <li>跳槽</li>
          <li>背题</li>
        </ul>
      </Fragment>
      
    )
  }
  handleInputChange(e){
    // this.state.inputValue = e.target.value;
    this.setState({
      inputValue:e.target.value
    });
    console.log(this.state.inputValue);
    
  }
}

export default TodoList