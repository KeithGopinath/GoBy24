/*eslint-disable*/
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Steps } from 'antd';
import Header from '../../components/Header';

const Seats = () => {
  const [currents, setCurrents] = useState('');

  const { Step } = Steps;

  const onCurrents = (currents) => {
    setCurrents(currents)
  }

  return (
    <div className="Seats-booking" >
      <Row >
        <Header />
        <Col sm={12}>
          <div className="seats-list" >
            <div className=" title">
              <span> Keep the middle seat empty so that your
                passengers are comfortable
              </span>
            </div>
            <div className="seatslist card">
              <div className="btn-title">
                <button className=" col-6 seats-btn">
                  No, I'll squeeze in 3
                </button>
                <button className=" col-6 seats-btn">
                  Yes, sure
                </button>
              </div>
              <div className=" sub-title">
                <span> So how many GoBy24 passengers can you take?
                </span>
              </div>
              <div className=" title">
                <Steps current={currents} onChange={onCurrents}>
                  <Step />
                  <Step />
                  <Step />
                </Steps>
              </div>
            </div>
            <div className=" title">
              <span> Can passengers book instantly?
              </span>
            </div>
            <div className="radioList card">
              <div className="radio-list">
                <div className="radio-style">
                  <label className="radio-butn">Yes, sure</label>
                  <input type="radio" className="radio-circle" name="radio-group" />
                </div>
                <div className="radio-style">
                  <label className="radio-butn">No, I’ll reply to each request myself</label>
                  <input type="radio" className="radio-circle2" name="radio-group" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12  col-md-4 col-lg-4 seats-butn">
              <button
                type="button"
                className="btn btn-primary btn-block conti-button"
              //onClick={onMap}}
              >
                Continue
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div >
  );
}

export default Seats;
