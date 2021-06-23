import React, { Component } from "react";
import OperationMap from './Map/OperationMap';

export class Mission extends Component {
  static displayName = Mission.name

  render() {
    return (
      <OperationMap />
    );
  }
}