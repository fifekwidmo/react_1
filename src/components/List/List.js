import React from 'react';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.js'
import Column from '../Column/Column.js'
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


class List extends React.Component {
  state = {
    columns: this.props.columns || [],
    }  
  static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
        image: PropTypes.string,
    }
    static defaultProps = {
      description: settings.defaultListDescription,

    }
    
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageUrl={this.props.image}/>
        <div className={styles.description}>
            {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
            <Column title={"Animals"}></Column>
            <Column title={"Plants"}></Column>
            <Column title={"Minerals"}></Column>
        </div>
      </section>
    )
  }
}

export default List;
