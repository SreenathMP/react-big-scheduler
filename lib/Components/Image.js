"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(["\n  max-height: ", ";\n  max-width: ", ";\n  opacity: ", ";\n  filter: ", ";\n  object-fit: cover;\n"], ["\n  max-height: ", ";\n  max-width: ", ";\n  opacity: ", ";\n  filter: ", ";\n  object-fit: cover;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: inline-block;\n  cursor: ", ";\n  width: ", ";\n"], ["\n  display: inline-block;\n  cursor: ", ";\n  width: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _images = require("../config/images");

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledImage = _styledComponents2.default.img(_templateObject, function (props) {
  return props.height ? props.height : "100%";
}, function (props) {
  return props.width ? props.width : "100%";
}, function (props) {
  return props.src !== _images2.default.icons.logoSmall ? 1 : 0.5;
}, function (props) {
  return props.src !== _images2.default.icons.logoSmall ? "grayscale(0%)" : "grayscale(100%)";
});

var Container = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.cursor ? props.cursor : "pointer";
}, function (props) {
  return props.width ? props.width : "100%";
});

var Image = function Image(props) {
  return _react2.default.createElement(
    Container,
    { width: props.width, cursor: props.cursor },
    _react2.default.createElement(StyledImage, _extends({}, props, {
      className: "lozad",
      src: props.src || _images2.default.icons.logoSmall
    }))
  );
};

exports.default = Image;