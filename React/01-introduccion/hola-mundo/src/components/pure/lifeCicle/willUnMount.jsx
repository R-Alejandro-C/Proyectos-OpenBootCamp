import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';


export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log("Comportamiento antes de que el componente desaparesca");
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


export const WillUnMountHook = () => {
    useEffect(() => {
        return() =>{
        console.log("Comportamiento antes de que el componente desaparesca");
    };
    });
    return (
        <div>
            
        </div>
    );
}