/* eslint-disable */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import GoogleMap from '../../components/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const OfferRide = () => (
  <div className="offer-ride">
    <Row>
      <Col lg={6} md={12}>
        <div className="left-login">
          <div className="card ">
            <div className="input-label">
              <label className="input-label">Pick Up</label>
              <FontAwesomeIcon icon={faSearch} className="search" />
              <input type="text" className="form-control" placeholder="manchester piccadilly" />
            </div>
            <div className="input-label">
              <label className="input-label">Drop off</label>
              <FontAwesomeIcon icon={faSearch} className="search" />
              <input type="text" className="form-control" placeholder="manchester piccadilly" >
              </input>
            </div>
            <div className="radio-list">
              <h3 className="radio-title">
                What's Your Route?
              </h3>
              <div className="radio-style">
                <label className="radio-butn">London Rd/6
                  <input type="radio" className="radio-circle" name="radio-group" />
                </label>
              </div>
              <div className="radio-style">
                <label className="radio-butn">London Rd/6
                  <input type="radio" className="radio-circle" name="radio-group" />
                </label>
              </div>
            </div>
            <Col sm={12}>
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
      <Col lg={6} md={12}>
        <div className="right-map">
          <div className="google-map">
            <GoogleMap />
          </div>
        </div>
      </Col>

    </Row>
  </div>
);
export default OfferRide;
