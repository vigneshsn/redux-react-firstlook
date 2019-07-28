import reducers from "../reducers";
import middleware from "../middleware";
import { createStore, applyMiddleware } from "redux";
import { shallow } from "enzyme";
import App from "./App";
import React from "react";
import { findByAttribute } from "../TestUtils";

describe("App component connected", () => {
  const setUp = (intialState = {}) => {
    const store = createStore(
      reducers,
      intialState,
      applyMiddleware(...middleware)
    );
    const wrapper = shallow(<App store={store} />)
      .childAt(0)
      .dive();
    console.log(wrapper.debug());
    return wrapper;
  };

  it("should render properly", () => {
    const appComponent = setUp();
    const wrapper = findByAttribute(appComponent, "appComponent");
    expect(wrapper.length).toBe(1);
  });
});
