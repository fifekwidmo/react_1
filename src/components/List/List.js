import React from 'react';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.js';
import Creator from '../Creator/Creator.js';
import Column from '../App/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
class List extends React.Component { 
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
    addColumn:PropTypes.func,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} imageUrl={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn}/>
        </div>
      </section>
    );
  }
}

export default List;
