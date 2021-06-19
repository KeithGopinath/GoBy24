import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';

const BoostPage = () => (
  <div className="boost-page">
    <Row>
      <Header />
      <Col md={6}>
        <div className="boost-left">
          <Col sm={12}>
            <div className="title-boost">
              <span>
                Get more with our Boost
                technology
              </span>
            </div>
          </Col>
          <Col sm={12}>
            <div className="img-rocket">
              <img src="./images/rocket.png" className="img-fluid" alt="..." />
            </div>
          </Col>
        </div>
      </Col>
      <Col md={6}>
        <div className="boost-right">
          <div className="passenger card">
            <div className="title">
              <span>
                Add your preffered stopovers to aid Boost
                find extra passangers on your way.
              </span>
            </div>
            <div className="time-butn">
              <button
                type="button"
                className="btn btn-primary btn-block date-button"
              // onClick={onMap}}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </Col>
    </Row>

  </div>
);

export default BoostPage;
