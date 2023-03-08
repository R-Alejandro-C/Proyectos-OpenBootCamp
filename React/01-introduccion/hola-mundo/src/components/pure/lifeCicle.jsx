import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class lifeCicle extends Component {
  constructor(props){
super(props)
console.log("Constructor: Cuando se instancia el componente");
  }

  componentWillMount(){
    console.log("Antes del montaje del componente");
  }
  componentDidMount(){
    console.log("En el montaje del componente, antes de renderizar");
  }
  componentWillReceiveProps(){
    console.log("Si va a recibir nuevas props");  
  }
  shouldComponentUpdate(nextProps, nextStates){
    console.log("Controla si el componente se actualiza");
  }
  componentWillUpdate(){
    console.log("Justo antes de actualizarse");
  }
  componentDidUpdate(){
    console.log("cuando se ha actualizado");
  }
  componentWillUnmount(){
    console.log("Justo antes de desaparecer");
  }


  render() {
    return (
      <div>lifeCicle</div>
    )
  }
}

lifeCicle.propTypes={

}