import React, { Component } from 'react'
import CreatePlaylist from '../create-playlist'
import AddMusic from '../add-music'

export default class Register extends Component {
  state = {
    showReg: true
  }

  valueFalse = () => {
    this.setState({showReg: false})
  }

  valueTrue = () => {
    this.setState({showReg: true})
  }

  render() {
    const show = () => {
      if (this.state.showReg) {
        return (
          <CreatePlaylist
            changeFalse={this.valueFalse}
          />
        )
      } else {
        return (
          <AddMusic 
            changeTrue={this.valueTrue} 
          />
        )
      }
    }
    
    return (
      <div>
        {show()}
      </div>
    )
  }
}
