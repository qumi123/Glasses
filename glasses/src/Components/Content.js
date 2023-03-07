import React, { Component } from 'react'
import Glasses from './Glasses'
import Models from './Models'
class Content extends Component {
  render() {
    return (
      <div>
        <Models/>
        <Glasses/> 
      </div>
    )
  }
}
export default Content