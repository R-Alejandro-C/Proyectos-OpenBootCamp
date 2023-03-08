import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';


export class DidMount extends Component {
    componentDidMount(){
        console.log("Comportamiento antes de que el componente sea añadido al DOM (REDNDERICE)");
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


DidMount.propTypes = {

};


export const DidMountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOM (REDNDERICE)");

    },[]);
    return (
        <div>
        <h1>DidMount</h1>
        </div>
    );
};


DidMountHook.propTypes = {

};


