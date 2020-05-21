import React from 'react';
import styles from './Button.scss';
/* eslint react/prop-types: 0 */

const Button = ({variant = '', ...otherProps }) =>(
  <button {...otherProps }className = { styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('') }/>
);

export default Button;

