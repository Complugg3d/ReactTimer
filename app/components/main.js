import React, { Component } from 'react';

import Nav from 'nav';

const Main = (props) => {
  return (
    <div>
      <div>
        <Nav/>
        <div>
          <p>Main.js render</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Main;
