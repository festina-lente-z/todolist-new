import React, { Component } from 'react';

class Test extends Component{
  // 当父组件的render函数被运行时，它的子组件render都将被重新运行一次
  render(){
    // return(
    //   <div>{this.props.item}</div>
    // )
    return React.createElement('div', {}, this.props.item)
  }
}

export default Test;