import React, { Component, useEffect } from 'react'

export class didUpdate extends Component {

componentDidUpdate(){
    console.log("Comportamiento cuando el estado se actualiza o se reciben nuevos props");
}
  render() {
    return (

      <div>
        <h1>didUpdate</h1>
        </div>
     
    )
  }
}


export const DidUpdateHook = () => {
    useEffect(() => {
        console.log("Comportamiento cuando el estado se actualiza o se reciben nuevos props");
  

    });
    
    return (
        <div>
            <h1>didUpdate</h1>
        </div>
    );
}


