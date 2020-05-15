// stworzenie komponentu Card, kierując się strukturą danych w dataStore.js oraz stylami w Card.scss,

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';


class Card extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
    }
  render() {
    return (
     <div className={styles.component}>{this.props.title}</div>
    )
  }
}
export default Card;