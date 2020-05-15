import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js'
import Creator from '../Creator/Creator.js'
import Icon from '../Icon/Icon.js'
import styles from './Column.scss';
class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
    }  
  static propTypes = {
        title: PropTypes.node.isRequired,
        icon: PropTypes.string,
    }
    addCard(title){
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
              title,
            }
          ]
        }
      ));
    }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}
          <span className={styles.icon}><Icon name={this.props.icon}/></span>
        </h3>
        {this.state.cards.map(({key, ...cardsProps}) => (
        <Card key={key} {...cardsProps} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    )
  }
}
export default Column;

// rozbudowa komponentu Column (wzorując się na List), aby:
// zapisywał zawartość właściwości cards w stanie komponentu,
// renderował komponenty Card, w oparciu o swój stan (czyli komponentu Column)
// posiadał również komponent Creator oraz metodę addCard przekazywaną temu komponentowi, co ma pozwalać na dodawanie kolejnych kart do stanu komponentu Column,
