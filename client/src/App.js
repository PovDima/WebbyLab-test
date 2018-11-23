import React from 'react';
import AppNavbar from './components/AppNavbar'
import FilmList from './components/FilmList'
import ItemModal from './components/ItemModal'
import { Container, Input, Button, Row, Col, InputGroupAddon, InputGroup } from 'reactstrap'
import { searchItem, addItem } from './actions/itemActions';
import { connect } from 'react-redux';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  state = {
    text: ''
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onInput = () => {
    let file = document.getElementById('flat-button-file').files[0]
    let reader = new FileReader()
    reader.readAsText(file);
    reader.onload = () => {
      // Read data line by line
      let array = reader.result.split("\n");
      let obj = {}
      for (let i in array) {
        switch (i % 5) {
          case 0:
            obj[array[i].slice(0, 5)] = array[i].slice(7); break;
          case 1:
            obj[array[i].slice(0, 12)] = array[i].slice(14); break;
          case 2:
            obj[array[i].slice(0, 6)] = array[i].slice(8); break;
          case 3:
            obj[array[i].slice(0, 5)] = array[i].slice(7); break;
          default:
            const newItem = {
              name: obj.Title,
              year: obj['Release Year'],
              format: obj.Fromat,
              actors: obj.Stars.split(', ')
            }
            this.props.addItem(newItem);
            obj = {};
        }
      }
    }
  }
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Container>
          <Row>
            <Col xs={6} sm={6} md={4} lg={4}>
              <ItemModal />
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
              <input onInput={this.onInput}
                id="flat-button-file"
                type="file"
                style={{ display: 'none' }}
              />
              <label htmlFor="flat-button-file">
                <Button color='dark' component="span" >
                  Upload File
              </Button>
              </label>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <InputGroup>
                <Input name={'text'} placeholder={'Search'} onChange={this.onChange} />
                <InputGroupAddon addonType="append">
                  <Button color="dark" onClick={this.props.searchItem.bind(this, this.state.text)}>Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
        <FilmList />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  item: state.item
})
export default connect(mapStateToProps, { searchItem, addItem })(App);
