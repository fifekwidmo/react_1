import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import Container from '../Container/Container';
import PropTypes from 'prop-types';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    const {cards} = this.props;
    return (
      <section className={styles.component}>
        <Container>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>       
        </Container>
      </section>
    );
  }
}

export default SearchResults;