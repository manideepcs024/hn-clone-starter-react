/* eslint-disable import/no-webpack-loader-syntax,   import/first*/

import React from 'react';


const Button = (props) => {
    return (
        <button className={props.className} onClick={props.onClick}>{props.text}</button>
    );
}
export default Button;