import { connect } from 'react-redux';
import Column from '../Column/Column';
import { getCardsForList } from '../../../Redux/cardsRedux';
import { createActionAddCard } from '../../../Redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title: title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);