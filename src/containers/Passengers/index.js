/* eslint-disable */
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Steps } from 'antd';

const { Step } = Steps;

const Passengers = () => {
  const [currents, setCurrents] = useState('');

  const onCurrents = (currents) => {
    setCurrents(currents)
  }

  return (
    <div className="passengers">
      <Row>
        <Col md={7}>
          <div className="left-pass">
            <div className="extra card">
              <div className="title">
                <span> Where do you prefer to meet extra passengers?
                </span>
              </div>
              <div className="sub-text">
                <span >  Get more with our Boost technology
                </span >
              </div>
              <div className="sub-text">
                <span> Add your preferred stopovers to help Boost find extra
                  passengers on your way.
                </span>
              </div>
              <div className="title">
                <button
                  type="button"
                  className="btn btn-primary btn-block city-btn modal-button"
                //onClick={onMap}}
                >
                  Add City
                </button>
              </div>
              <div className="input-title">
                <input className="form-control" placeholder="Manchester picadilly" />
              </div>
              <div className="radio-butns">
                <label className="container">Chandragiri
                  <input type="checkbox" name="checkboxNoLabel" className="checkmark" />
                </label>
                <label className="container">Manchester picadilly
                  <input type="checkbox" name="radioNoLabel" id="radioNoLabel1" className="checkmark" />
                </label>
              </div>
              <div className="pass-butn">
                <button
                  type="button"
                  className="btn btn-primary btn-block conti-button"
                //onClick={onMap}}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col md={5}>
          <div className="right-pass">
            <div className="status">
              <Row>
                <Col lg={7} md={12} sm={7} xs={12}>
                  <div>
                    <div>
                      <Steps progressDot current={currents} onChange={onCurrents} direction="vertical">
                        <Step title="Pune" />
                        <Step title="Switzeland Park" />
                        <Step title="Chandragiri" />
                        <Step title="Chandragiri" />
                      </Steps>
                    </div>
                  </div>
                </Col>
                <Col lg={5} md={12} sm={5} xs={12} className="status-butns">
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary btn-block modal-button"
                    //onClick={onMap}}
                    >
                      View map
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Passengers
