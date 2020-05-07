import React, { Component } from 'react';
import { Card, OverlayTrigger, Tooltip, Nav } from 'react-bootstrap';
import Cryptorating from '../TrendingFormCryptoRating';
import DigitalMonthly from '../TrendingFormDigitalMonthly';

class TrendingCardCrypto extends Component {
  state = {
    cryptoActiveKey: '#cryptorating'
  };

  handleCryptoSelect = selectedKey => {
    this.setState({cryptoActiveKey: selectedKey});
  }

  render() {
    return (
      <Card>
        <Card.Header className='crypto-header'>
          <OverlayTrigger key='top' placement='top' overlay={
            <Tooltip id={'tooltip-top'}>
              Crytpo-rating to assess the health index of crypto projects and
              Monthly time series for a digital currency (Ex: BTC)
              traded on a specific market
            </Tooltip>
          }>
          <Card.Title>Cryptocurrencies</Card.Title>
          </OverlayTrigger>

          <Nav variant='tabs' defaultActiveKey={this.state.cryptoActiveKey} onSelect={this.handleCryptoSelect}>
            <Nav.Item>
              <Nav.Link href='#cryptorating'>Cryptorating</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href='#digitalMonthly'>Digital Monthly</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Card.Text> 
            {this.state.cryptoActiveKey === '#cryptorating' ? <Cryptorating handleCryptoSubmit={this.props.handleCryptoSubmit}/> : <DigitalMonthly handleDigitalMonthlySubmit={this.props.handleDigitalMonthlySubmit}/>}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default TrendingCardCrypto;