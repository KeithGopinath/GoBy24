/* eslint-disable */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';

const Price = () => (
  <div className="price-page">
    <Row >
      <Header />
      <Col sm={12}>
        <div className="price-list" >
          <div className=" title">
            <span> This is our recommended price per seat.
              OK for you?
            </span>
          </div>
          <div className=" title">
            <span className="price"> ₹ 10
            </span>
          </div>
          <div className=" butnlist cards">
            <button className="butnprice">
              Yes sure
            </button>
            <button className="butnprice">
              No, I’ll change the price
            </button>
          </div>
          <div className=" perlist cards">
            <div className="sub-title">
              <span className="per-seat"> My recommended price per seat
              </span>
            </div>
            <div className="incre-decre">
              <div className="handle-counter" id="handleCounter">
                <button className="counter-minus btn btn-primary">-</button>
                <input type="text" className="input-text" value="3" />
                <button className="counter-plus btn btn-primary">+</button>
              </div>
            </div>
            <div className="sure-butn">
              <button className="butn-sure">
                Continue
              </button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Price;
