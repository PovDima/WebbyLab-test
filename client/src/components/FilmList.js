import React from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'
import ItemModal from './ItemModal';

class FilmList extends React.Component {

  componentDidMount() {
    this.props.getItems();
  }
  onDeleteClick = id => {
    this.props.deleteItem(id);
  }
  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup >
            {items.map(({ _id, name, year, format, actors }) => {
              return (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >Delete
                </Button>
                    {
                      <div>
                        <h3>Title : {name}</h3>
                      </div>
                    }
                    <ItemModal id={_id} name={name} year={year} format={format} actors={actors} title={'More info'} header={'Info about Film'} />
                  </ListGroupItem>
                </CSSTransition>
              )
            })}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

FilmList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  item: state.item
})
export default connect(mapStateToProps, { getItems, deleteItem })(FilmList);