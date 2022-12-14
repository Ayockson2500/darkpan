import React, { useState } from "react";
import { StyledCalender } from "./StyledCalender.styles";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

const Calender = ({className}) => {
  const [date, setDate] = useState(new Date());

  return (
    <StyledCalender>
      <div className="d-flex align-items-center justify-content-between title-wrapper">
        <p>Messages</p>
        <Link>Show All</Link>
      </div>
      <div className="calender-wrapper">
        <Calendar onChange={setDate} value={date} />
      </div>
    </StyledCalender>
  );
};

export default Calender;
