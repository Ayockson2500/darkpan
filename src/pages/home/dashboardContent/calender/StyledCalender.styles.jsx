import styled from "styled-components";

export const StyledCalender = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    background: ${props => props.theme.color.primaryDarkBg};
    padding: 20px;
    border-radius: 5px;
    width: 100%;

    .title-wrapper {
        margin: 15px 0;
    }
    .title-wrapper p {
        color: ${props => props.theme.color.mainLightColor};
        font-size: 14px;
    }
    .title-wrapper a {
        text-decoration: none;
        color: ${props => props.theme.color.mainRedColor};
        font-size: 14px;
    }

    .calender-wrapper {
        color: ${props => props.theme.color.mainNavyColor};
    }
    .react-calendar {
        width: 100%;
        max-width: 100%;
        background: ${props => props.theme.color.primaryDarkBg};
        border: none;
        font-family: sans-serif;
        line-height: .125em;
        color: ${props => props.theme.color.mainNavyColor};
        font-size: 12px;
}
.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.react-calendar button:enabled:hover {
  cursor: pointer;
}
.react-calendar__navigation {
  display: flex;
  height: 24px;
  margin-bottom: 0;
}
.react-calendar__navigation button {
  min-width: 2px;
  background: none;
  color: ${props => props.theme.color.mainNavyColor};
  font-size: 12px;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: #e6e6e6;
  border-radius: 3px;
}
.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
}
.react-calendar__month-view__weekdays__weekday {
  padding: 0.7em;
}
.react-calendar__month-view__days__day--weekend {
  color: #d10000 !important;
}
.react-calendar__month-view__days__day--neighboringMonth {
  color: #757575 !important;
}
.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 1em 5em;
}
.react-calendar__tile {
  max-width: 100%;
  padding: 10px 6.6667px;
  background: none;
  text-align: center;
  line-height: 16px;
  color: ${props => props.theme.color.mainNavyColor};
}
.react-calendar__tile:disabled {
  background-color: #f0f0f0;
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #E9ECEF;
  border-radius: 3px;
}
.react-calendar__tile--hasActive {
  background: #76baff;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;
}
.react-calendar__tile--active {
  background: #EB1616;
  color: white !important;
  border-radius: 3px;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: #1087ff;
}
`