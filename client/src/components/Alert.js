import React from "react";
import "../styles/components.scss";
import "../styles/Alert.scss";


export default function Alert(props) {
  let alerts;
  if (props.alerts.length !== 0) {
    alerts = props.alerts[0].map((alert) => <li className="alert--message"> ⚠️ &nbsp; {alert}&nbsp;  😿 </li>);
  } else {
    <div></div>;
  }
  return <ul className="alerts--container">{alerts}</ul>;
}
