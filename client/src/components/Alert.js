import React from "react";

export default function Alert(props) {
  let alerts;
  if (props.alerts.length !== 0) {
    alerts = props.alerts[0].map((alert) => <li>{alert}</li>);
  } else {
    <div></div>;
  }
  return <ul>{alerts}</ul>;
}
