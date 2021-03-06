import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  // 避免组件做无谓的render操作
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.content !== this.props.content){
      return true;
    } else {
      return false;
    }
    
  }
  render(){
    console.log('child - render');
    const {test,item} = this.props
    return (
      <Fragment>
        {
          <li
            onClick={this.handleDelete}
          >
            {test}-{item}
          </li>
        }
      </Fragment>
    )
  }
  // 当一个组件要从父组件接收参数
  // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
  // 如果这个组件第一次存在于父组件中，不会被执行
  // 如果这个组件之前已经存在于父组件中，才会被执行
  UNSAFE_componentWillReceiveProps(){
    // console.log('componentWillReceiveProps');
  }

  // 当这个组件即将被从页面中剔除的时候，会被执行
  componentWillUnmount(){
    // console.log('componentWillUnmount');
  }

  handleDelete(){
    const {index, handleItemDelete} = this.props
    handleItemDelete(index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  handleItemDelete: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;