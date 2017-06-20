import React from 'react';
const ReactDOM = require('react-dom');
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import Timer from 'timer';

describe('Timer', () => {
  it('should exists', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);
    setTimeout(() => {
      expect(timer.state.countdownStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);

  });

  it('should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    expect(timer.state.count).toBe(10);
    setTimeout(() => {
      expect(timer.state.countdownStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done();
    }, 1001);

  });

  it('should clear timer on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    expect(timer.state.count).toBe(0);
    setTimeout(() => {
      expect(timer.state.countdownStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);

  });
});
