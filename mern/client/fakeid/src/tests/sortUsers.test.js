import React from 'react';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Overview from "./../pages/Overview";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it('test jest is working', () => {
    act(() => {
      render(<Overview />, container);
    });
    expect(container.textContent).toBe("LOADING");
  
    
  });