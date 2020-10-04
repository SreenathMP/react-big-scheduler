import React from "react";

const SlotPointer = (props) => {
  const { maxWidth } = props;

  const createSlots = () => {
    let elements = [];

    for (var i = 60; i <= maxWidth; i = i + 60) {
      elements.push(
        <div
          className="slotMark"
          key={i}
          style={{
            width: i,
          }}
        ></div>
      );
    }

    return elements;
  };

  return <React.Fragment> {createSlots()}</React.Fragment>;
};

export default SlotPointer;
