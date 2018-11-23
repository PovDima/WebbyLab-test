import React from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardFooter
} from 'reactstrap'
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
class ItemModal extends React.Component {
  state = {
    modal: false,
    name: '',
    year: '',
    format: '',
    actors: []
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      year: this.state.year,
      format: this.state.format,
      actors: this.state.actors.split(',')
    }
    //Add item via addItem action
    this.props.addItem(newItem);
    this.toggle();
  }
  render() {
    return (
      <div>
        <Button
          color="dark"
          onClick={this.toggle}
        >{this.props.title || 'Add Item'}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}> {this.props.header || 'Add To Film List'} </ModalHeader>
          <ModalBody>
            {this.props.title ?
              <Card>
                <CardHeader tag={'h4'}>Title: {this.props.name}</CardHeader>
                <CardBody>
                  <CardText>Format: {this.props.format}</CardText>
                  <CardText>ID: {this.props.id}</CardText>
                  <CardText>Actors: {this.props.actors.join(', ')}</CardText>
                </CardBody>
                <CardFooter>Year: {this.props.year}</CardFooter>
              </Card>
              : <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={this.onChange}
                  />
                  <Label for="year">Year</Label>
                  <Input
                    type="number"
                    name="year"
                    id="year"
                    placeholder="Year"
                    onChange={this.onChange}
                  />
                  <Label for="format">Format</Label>
                  <Input
                    type="text"
                    name="format"
                    id="format"
                    placeholder="Format"
                    onChange={this.onChange}
                  />
                  <Label for="actors">Actors</Label>
                  <Input
                    type="text"
                    name="actors"
                    id="actors"
                    placeholder="Actors"
                    onChange={this.onChange}
                  />
                  <Button
                    color="dark"
                    style={{ marginTop: '2rem' }}
                  >
                    Add Film
                  </Button>
                </FormGroup>
              </Form>}
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item,
})
export default connect(mapStateToProps, { addItem })(ItemModal);