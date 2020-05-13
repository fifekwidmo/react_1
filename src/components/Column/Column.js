import React from 'react';
import styles from './Column.scss';


class Column extends React.Component {
    // static propTypes = {
    //     title: PropTypes.node.isRequired,
    // }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>Third h3</h3>
      </section>
    )
  }
}

export default Column;
