/*eslint-disable*/
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { TimePicker } from 'antd';
import moment from 'moment';
import Header from '../../components/Header';
import CalendarDate from '../../components/Calendar';

const Booking = () => {
  // const [value, setValue] = useState(null);

  // const onSetTime =(e) => {
  //   setValue(e.target.value);
  // };

  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div className="booking-calendar" >
      <Row>
        <Header />
        <Col sm={12}>
          <div className="title">
            <span>
              When are you going
            </span>
          </div>
        </Col>
        <Col sm={12}>
          <div className="calendar-date card ">
            <CalendarDate />
          </div>
        </Col>
        <Col sm={12}>
          <div className="title">
            <span>
              At what time will you pick passengers up?
            </span>
          </div>
          <div className="md-form">
            <TimePicker className="time-picker" defaultValue={moment((time), 'HH:mm:ss')} />
          </div>
          <div className=" col-sm-6 col-xs-12  col-md-4 col-lg-4 time-butn">
            <button
              type="button"
              className="btn btn-primary btn-block date-button"
            //onClick={onMap}}
            >
              Continue
            </button>
          </div>
        </Col>
      </Row>
    </div >
  );
}

export default Booking;
