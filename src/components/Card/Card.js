import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
class Card extends React.Component {
 static propTypes = {
   title: PropTypes.node.isRequired,
 }
 render() {
   const {title} = this.props;
   console.log(title);
   return (<div className = {styles.component}> {this.props.title}</div>
   );
 }
}

export default Card;