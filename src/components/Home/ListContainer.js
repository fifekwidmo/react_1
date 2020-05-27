import {connect} from 'react-redux';
import List from '../List/List';
import {getColumnsForList} from '../../../Redux/columnRedux';
import {createActionAddColumn} from '../../../Redux/columnRedux';

const mapStateToProps = (state, props) => ({columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title: title,  
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);