import React, { Component } from 'react'

export default class ListUser extends Component {
  state = {
    list: this.props.list
  }

  render() {
    return (
      <div>
        {this.props.list.map(param => {
          return( 
            <p>
              {param.name}<button>x</button>
            </p>
        )})}
      </div>
    )
  }
}
