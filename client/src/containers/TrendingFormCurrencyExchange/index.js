import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

class CurrencyExchangeRate extends Component {
  state = {
    currencyFromInput: '',
    currencyToInput: '',
  }

  handleCurrencyFromChange = (event) => {
    this.setState({ currencyFromInput: event.target.value });
  }

  handleCurrencyToChange = (event) => {
    this.setState({ currencyToInput: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleCurrencySubmit(this.state.currencyFromInput, this.state.currencyToInput);
    this.setState({ currencyFromInput: '', currencyToInput: '' });
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formCurrencyExchangeRate">
          <Form.Label>Currency Exchange Rate</Form.Label>

          <Form>
            <Form.Row>
              <Col>
                <Form.Control value={this.state.currencyFromInput} onChange={this.handleCurrencyFromChange} type="text" placeholder="USD" />
              </Col>

              <Col>
                <Form.Control value={this.state.currencyToInput} onChange={this.handleCurrencyToChange} type="text" placeholder="JPY" />
              </Col>
            </Form.Row>
          </Form>

          <Form.Text className="text-muted">Note: Can"t do physical (Ex: USD) to digital (Ex: BTC) currency exchange</Form.Text>
          <Form.Text className="text-muted">Ex: USD (US Dollar) to JPY (Japanese Yen)</Form.Text>
        </Form.Group>

        <Button onClick={(e) => this.handleSubmit(e)} variant="dark" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default CurrencyExchangeRate;
