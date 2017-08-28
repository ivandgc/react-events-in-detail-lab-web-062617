import React from 'react'

export default class CoordinatesButton extends React.Component {
  recieveCoordinates = (event) => this.props.onReceiveCoordinates([event.pageX, event.pageY])


  render(){
    return <button onClick={this.recieveCoordinates} />
  }
}
