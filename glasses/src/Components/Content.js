import React, { Component } from 'react'
import Glasses from './Glasses'
import Model from './Models'
class Content extends Component {
  render() {
    return (
      <div>
        <Model/>
        <Glasses/> 
      </div>
    )
  }
}
export default Content