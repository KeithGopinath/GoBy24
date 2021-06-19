/* eslint-disable */
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Steps } from 'antd';
import Header from '../../components/Header';
import GoogleMap from '../../components/Map';

const DropOff = () => {
  const [currents, setCurrents] = useState('');

  const { Step } = Steps;

  const onCurrents = (currents) => {
    setCurrents(currents)
  }

  return (
    <div className="drop-off">
      <Row>
        <Header />
        <Col lg={6} md={12}>
          <div className="left-Drop">
            <div className="drop card">
              <Col md={12}>
                <div className="title">
                  <span> Where do you prefer to meet extra passengers?
                  </span>
                </div>
                <div className="input-title">
                  <input className="form-control" placeholder="Manchester picadilly" />
                </div>
                <div className="title">
                  <span> These are the best places to stop in those cities. OK for you?
                  </span>
                </div>
                <div className="steps">
                  <Steps progressDot current={currents} onChange={onCurrents} direction="vertical">
                    <Step title="Pune" />
                    <Step title="Switzeland Park" />
                    <Step title="Chandragiri" />
                    <Step title="Chandragiri" />
                  </Steps>
                </div>
                <div className="butn">
                  <button
                    type="button"
                    className="btn btn-primary btn-block conti-button"
                  //onClick={onMap}}
                  >
                    Continue
                  </button>
                </div>
              </Col>
            </div>
          </div>
        </Col>
        {/* right */}
        <Col lg={6} md={12}>
          <div className="right-map">
            <div className="google-map">
              <GoogleMap />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default DropOff;
