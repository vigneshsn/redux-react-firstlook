import { shallow } from "enzyme";
import Todo from "./todo";
import React from "react";
import { findByAttribute } from "../TestUtils";

describe("todo component", () => {
  const setUp = props => {
    return shallow(<Todo {...props} />);
  };

  it("should render properly", () => {
    const todoList = [
      {
        id: 1,
        title: "Title 1"
      },
      {
        id: 2,
        title: "Title 2"
      }
    ];

    const component = setUp({ todoList: todoList });
    const wrapper = findByAttribute(component, "todoComponent");
    //console.log(component.debug());
    expect(wrapper.length).toBe(1);
  });
});
