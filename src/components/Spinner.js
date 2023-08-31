import React, { Component } from 'react'
import loading from './Loading.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt="loading" style={{height:'50px',width:'50px'}} />
      </div>
    )
  }
}

export default spinner
