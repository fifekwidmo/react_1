import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import styles from './Column.scss';
class Column extends React.Component {  
  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array.isRequired,
    addCard:PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render() {
    const {title, icon, cards, addCard} = this.props;
    console.log(title, icon);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}
          <span className={styles.icon}><Icon name={this.props.icon}/></span>
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />))}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}
export default Column;



