import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Search from '../Search/Search';
import Icon from '../Icon/Icon';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>  
              <Icon name='cat' />
            </Link>
            <Search></Search>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>   
              <NavLink exact to='/Faq' activeClassName='active'>FAQ</NavLink>   
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;