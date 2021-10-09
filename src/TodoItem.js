import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render(){
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
  handleDelete(){
    const {index, handleItemDelete} = this.props
    handleItemDelete(index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  item: PropTypes.string,
  handleItemDelete: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;