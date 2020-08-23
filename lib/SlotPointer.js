"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlotPointer = function SlotPointer(props) {
  var maxWidth = props.maxWidth;


  var createSlots = function createSlots() {
    var elements = [];

    for (var i = 60; i <= maxWidth; i = i + 60) {
      elements.push(_react2.default.createElement("div", {
        className: "slotMark",
        style: {
          width: i
        }
      }));
    }

    return elements;
  };

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    " ",
    createSlots()
  );
};

exports.default = SlotPointer;