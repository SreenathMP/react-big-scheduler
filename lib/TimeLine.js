"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeLine = function TimeLine(props) {
  var _useState = (0, _react.useState)((0, _moment2.default)()),
      _useState2 = _slicedToArray(_useState, 2),
      currentTime = _useState2[0],
      setCurrentTime = _useState2[1];

  var startTime = props.startTime,
      endTime = props.endTime,
      maxWidth = props.maxWidth;

  var progress = currentTime.diff(startTime) / endTime.diff(startTime);
  var width = Math.min(Math.round(progress * maxWidth), maxWidth);

  var isBeforeToday = currentTime.isAfter(endTime);
  var isAfterToday = currentTime.isBefore(startTime);

  (0, _react.useEffect)(function () {
    var intervalId = setInterval(function () {
      return setCurrentTime((0, _moment2.default)());
    }, 10000);
    return function () {
      return clearInterval(intervalId);
    };
  });

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    !isAfterToday && _react2.default.createElement(
      "div",
      {
        className: "timeMark",
        style: isBeforeToday ? { width: width, border: "none" } : { width: width }
      },
      !isBeforeToday && _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement("div", { className: "timeMarkPoint" }),
        _react2.default.createElement(
          "span",
          { className: "timeText" },
          " ",
          currentTime.format("h:mm a"),
          " "
        )
      )
    )
  );
};
exports.default = TimeLine;