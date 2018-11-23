import React from 'react'
import { Container, ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
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
                    <Row>
                      <Col xs={6} >{
                        <h6>Title : {name}</h6>
                      }
                      </Col>
                      <Col xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                          className="remove-btn"
                          color="danger"
                          onClick={this.onDeleteClick.bind(this, _id)}
                        >Delete
                        </Button>
                        <ItemModal id={_id} name={name} year={year} format={format} actors={actors} title={'More info'} header={'Info about Film'} />
                      </Col>
                    </Row>
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