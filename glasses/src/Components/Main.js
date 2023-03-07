import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import './main.css'
class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Header/>
        <Content/>
      </div>
    )
  }
}
export default Main