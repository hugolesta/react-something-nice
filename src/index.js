"use strict";

import getMessage from './messages';
import React, { PureComponent } from 'react';

export default class SomethingNice extends PureComponent {

  constructor(props) {
    super(props);
    this.message = getMessage(props.lang);
  }

  render() {
    return (
      <span>
        { this.message }
      </span>
    )
  }
}
